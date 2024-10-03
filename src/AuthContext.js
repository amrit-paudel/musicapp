import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Text } from '@rneui/base'; 
import { Text } from 'react-native';

// Backend API endpoint to verify token
const verifyTokenUrl = 'http://192.168.101.2:5000/verify-token';

// Create the AuthContext
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ( {children} ) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Function to check login status (i.e., token verification)
    const checkLoginStatus = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken');

            if (token) {
                // Verify token with backend
                const response = await fetch(verifyTokenUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (response.ok && data.isValid) {
                    setIsLoggedIn(true); // Valid token
                } else {
                    setIsLoggedIn(false); // Invalid token
                    await AsyncStorage.removeItem('authToken'); // Clear invalid token
                }
            } else {
                setIsLoggedIn(false); // No token found
            }
        } catch (error) {
            // console.error('Error checking login status:', error);
            setIsLoggedIn(false); // Handle errors by assuming the user is not logged in
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    // Run this effect only once on app startup
    useEffect(() => {
        checkLoginStatus();
    }, []);
    
    {console.log("DEBUG INSIDE AuthProvider")}
    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
