
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import Signup from '../screens/Signup'
import Login from '../screens/login/Login'
import Signup from '../screens/signup/Signup'




export type AuthStackParamList = {
    Login: undefined;
    Signup: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();


export const AuthStack = () => {
    { console.log("DEBUG INSIDE AuthStack") }
    return (
        <Stack.Navigator
            initialRouteName='Login'

            screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                animation: 'slide_from_right',
            }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />


        </Stack.Navigator>
    );
}





