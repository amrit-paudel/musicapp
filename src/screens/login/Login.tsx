


import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Platform } from 'react-native';
import Snackbar from 'react-native-snackbar';

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../AuthContext';  // Import the AuthContext


// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../routes/AuthStack';
// import { AppStackParamList } from '../../routes/AppStack'; // Import AppStackParamList


import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing auth token



type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation }: LoginScreenProps) => {
    { console.log("DEBUG INSIDE Login") }
    const { setIsLoggedIn } = useContext(AuthContext);  // Use the context to access setIsLoggedIn

    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // first check empty or not
        if (email.length < 1 || password.length < 1) {
            setError('All fields are required');

        } else {

            // further validation of email
            if (!emailRegex.test(email)) {
                setError('Please enter a valid email address');
                return
            }

            // validation of password
            // Password length check (at least 6 characters)
            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                return
            }
        }

        // Handling backend login logic here, e.g., using an API call
        loginUser() // login logic is handled in this function

    };

    const loginUser = async () => {
        const payload = { email, password }; 

        try { 
            const response = await fetch('http://192.168.101.2:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (response.ok) {

                console.log("DEBUG data.token", data.token)

                // Save the token to AsyncStorage
                await AsyncStorage.setItem('authToken', data.token);

                // Handle successful login
                // navigation.navigate('Home'); // Navigate to the home screen or dashboard

                // Navigate to the AppStack (handled automatically by Router.tsx)

                // navigation.reset({
                //     index: 0,
                //     routes: [{ name: 'AppStack' as keyof AppStackParamList }], // Assuming AppStack is inside AppStack
                // });

                // Update isLoggedIn state immediately
                // this is provided via the context 
                setIsLoggedIn(true); // Add this line

                Snackbar.show({
                    text: 'Login Success',
                    duration: Snackbar.LENGTH_SHORT,
                });

            } else {
                // Handle login errors
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            if (err instanceof TypeError) {
                // TypeError often occurs when there's a network error or the request can't be fulfilled
                setError('Network error or server is unreachable. Please try again later.');
            } else {
                // some other errors
                console.error('Error:', err);
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >

            <View style={styles.formContainer}>
                <Text style={styles.appName}>App Login</Text>

                {/* Email */}
                <TextInput
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholderTextColor={'#AEAEAE'}
                    placeholder="Email"
                    style={styles.input}
                />

                {/* Password */}
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholderTextColor={'#AEAEAE'}
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                />

                {/* Validation error */}
                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                {/* Login button */}
                <Pressable
                    onPress={handleLogin}
                    style={[styles.btn, { marginTop: error ? 10 : 20 }]}>
                    <Text style={styles.btnText}>Login</Text>
                </Pressable>

                {/* Sign up navigation */}
                <Pressable
                    onPress={() => navigation.navigate('Signup')}
                    style={styles.signUpContainer}>
                    <Text style={styles.noAccountLabel}>
                        Don't have an account?{'  '}
                        <Text style={styles.signUpLabel}>Create an account</Text>
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    formContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
    },
    appName: {
        color: '#f02e65',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fef8fa',
        padding: 10,
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        width: '80%',
        color: '#000000',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
    },
    errorText: {
        color: 'red',
        alignSelf: 'center',
        marginTop: 10,
    },
    btn: {
        backgroundColor: '#ffffff',
        padding: 10,
        height: 45,
        alignSelf: 'center',
        borderRadius: 5,
        width: '80%',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 3,
    },
    btnText: {
        color: '#484848',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signUpContainer: {
        marginTop: 80,
    },
    noAccountLabel: {
        color: '#484848',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    signUpLabel: {
        color: '#1d9bf0',
    },
});

export default Login;


