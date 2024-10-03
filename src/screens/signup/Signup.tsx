



import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Platform, Modal } from 'react-native';
import React, { useState } from 'react';

import axios from 'axios';

const Signup = ({ navigation }: any) => {
    const [error, setError] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const [isValidation, setValidation] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false); // To control the modal visibility


    const handleValidation = () => {
        // Clear previous errors (if any)
        setError('');

        // Basic validation checks
        if (name.length < 1 || email.length < 1 || password.length < 1 || repeatPassword.length < 1) {
            setError('All fields are required');
            console.log("1 ", error)
            return false;
        }

        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            console.log("2 ", error)
            return false;
        }

        // Password length and strength check
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        // if (!passwordRegex.test(password)) {
        //     setError('Password must be at least 6 characters, include an uppercase, lowercase, number, and special character');
        //     console.log("3 ", error);
        //     return false;
        // }

        // Password length check (at least 6 characters)
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            console.log("3 ", error)
            return false; 
        } 

        // Passwords match check
        if (password !== repeatPassword) {
            setError('Passwords do not match');
            console.log("4 ", error)
            return false;
        }

        // If all validations pass
        setError('');
        return true;
    };




    const handleSignup = () => {
        const isValid = handleValidation(); // Run validation check
        if (isValid) {
            setValidation(true); // Set validation state to true if passed
            // Call the signup logic here
            signupUser(); // e.g., the function that sends the data to the backend
        } else {
            setValidation(false); // Ensure validation state is false if validation fails
        }
    };



    const signupUser = async () => {
        {console.log("DEBUG INSIDE Signup")}
        const payload = { name, email, password };

        try {

            const response = await fetch('http://192.168.101.2:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),

            });

            const data = await response.json(); 
            if (response.ok) {
                navigation.navigate('Login'); // On successful signup
            } else {

                if (data.message === "Email is already registered") {
                    setError(data.message);  // Ensure the error message is set
                    setIsModalVisible(true) // // Show modal when email is already registered
                }
                else {
                    setError('Signup failed');
                }
            }
        } catch (err) {
            if (err instanceof TypeError) {
                // TypeError often occurs when there's a network error or the request can't be fulfilled
                setError('Network error or server is unreachable. Please try again later.');
            } else {
                // You can also log the actual error for debugging purposes
                console.error('Error:', err);
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };








    // making use of Axios()
    // const signupUser = async () => {
    //     const payload = { name, email, password };
    //     console.log("Payload", payload)

    //     try {
    //         const response = await axios.post('http://192.168.101.3:5000/signup', payload, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }, 
    //         });

    //         // Axios automatically parses the JSON response, so no need for .json()
    //         if (response.status === 200 || response.status === 201) {
    //             navigation.navigate('Login'); // On successful signup
    //         } else {
    //             setError(response.data.message || 'Signup failed');
    //         }
    //     } catch (error: any) {
    //         if (error.response) {
    //             // Server responded with a status code outside the range of 2xx
    //             setError(error.response.data.message || 'Signup failed');
    //         } else if (error.request) {
    //             // No response was received
    //             setError('No response from server');
    //         } else {
    //             // Something else went wrong
    //             setError('An error occurred');
    //         }
    //     }
    // };




    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.appName}>Signup</Text>

                {/* Name */}
                <TextInput
                    value={name}
                    onChangeText={text => {
                        setError('');
                        setName(text);
                    }}
                    placeholderTextColor={'#AEAEAE'}
                    placeholder="Name"
                    style={styles.input}
                />

                {/* Email */}
                <TextInput
                    value={email}
                    keyboardType="email-address"
                    onChangeText={text => {
                        setError('');
                        setEmail(text);
                    }}
                    placeholderTextColor={'#AEAEAE'}
                    placeholder="Email"
                    style={styles.input}
                />

                {/* Password */}
                <TextInput
                    value={password}
                    onChangeText={text => {
                        setError('');
                        setPassword(text);
                    }}
                    placeholderTextColor={'#AEAEAE'}
                    placeholder="Password"
                    secureTextEntry
                    style={styles.input}
                />

                {/* Repeat password */}
                <TextInput
                    secureTextEntry
                    value={repeatPassword}
                    onChangeText={text => {
                        setError('');
                        setRepeatPassword(text);
                    }}
                    placeholderTextColor={'#AEAEAE'}
                    placeholder="Repeat Password"
                    style={styles.input}
                />

                {/* Validation error */}

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                {/* Signup button */}
                <Pressable onPress={handleSignup} style={[styles.btn, { marginTop: error ? 10 : 20 }]}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>

                {/* Login navigation */}
                <Pressable onPress={() => navigation.navigate('Login')} style={styles.loginContainer}>
                    <Text style={styles.haveAccountLabel}>
                        Already have an account?{'  '}
                        <Text style={styles.loginLabel}>Login</Text>
                    </Text>
                </Pressable>

                {/* Modal for Email Already Exists */}
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>{error}</Text>
                            <Pressable onPress={() => {
                                setIsModalVisible(false);
                                navigation.navigate('Login');
                            }} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Go to LOGIN</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>


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
        marginTop: 10,

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
    loginContainer: {
        marginTop: 60,
    },
    haveAccountLabel: {
        color: '#484848',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    loginLabel: {
        color: '#1d9bf0',
    },

    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#f02e65',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

});

export default Signup