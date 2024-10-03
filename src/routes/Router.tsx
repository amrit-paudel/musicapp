

// // A simple router making use of useEffect hook to check whether the user is logged in or not
// // If user is logged in route him to AppStack
// // if user is not logged in route him to AuthStack 


// import { View, Text } from 'react-native'
// import React, { useContext, useEffect, useState } from 'react'

// import {NavigationContainer} from '@react-navigation/native'

// import AsyncStorage from '@react-native-async-storage/async-storage'; // To store the token or session

// import Loading from '../components/Loading';

// //Routes
// import { AppStack } from './AppStack';
// import { AuthStack } from './AuthStack';


// // backend API endpoint 
// const verifyTokenUrl = 'http://192.168.101.4:5000/verify-token';

// export const Router = () => {
//     const [isLoading, setIsLoading] = useState(true); // State to handle loading
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // State to handle login status

//     // This useEffect will run when the app starts to check if the user is logged in
//     useEffect(() => {
//         const checkLoginStatus = async () => {
//             try {
//                 // Assume the token is stored in AsyncStorage after login
//                 const token = await AsyncStorage.getItem('authToken');

//                 if (token) {
//                     // Optionally, verify the token with the backend (if needed)
//                     const response = await fetch(verifyTokenUrl, {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     const data = await response.json();

//                     if (response.ok && data.isValid) {
//                         setIsLoggedIn(true); // Valid token, user is logged in
//                     } else {
//                         setIsLoggedIn(false); // Invalid token
//                         await AsyncStorage.removeItem('authToken'); // Clear invalid token
//                     }
//                 } else {
//                     setIsLoggedIn(false); // No token found
//                 }
//             } catch (error) {
//                 console.error('Error checking login status:', error);
//                 setIsLoggedIn(false); // If an error occurs, treat as not logged in
//             } finally {
//                 setIsLoading(false); // Always set loading to false after check
//             }
//         };

//         checkLoginStatus(); // Call the function to check the login status on app start
//     }, []);

//     // if (isLoading) {
//     //     // Show a loading screen while checking login status
//     //     return <Loading />;
//     // }

//     return (
//         <NavigationContainer>
//             {isLoggedIn ? <AppStack /> : <AuthStack />} 
//             {/* //Render stacks based on login status */}

//             {/* <AppStack /> */}
//         </NavigationContainer>
//     );
// };


import React, { useContext } from 'react';
import {Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { AuthContext } from './AuthContext'; // Import the AuthContext
import { AuthContext } from '../AuthContext';

import Loading from '../components/Loading';


// Routes
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

const Router = () => {
    {console.log("DEBUG INSIDE Router")}
    const { isLoggedIn, isLoading } = useContext(AuthContext); // Use AuthContext to get login state and loading

    // Display loading screen while checking login status
    if (isLoading) {
        return <Loading />;
    }

    return (
        
        <NavigationContainer> 
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Router



