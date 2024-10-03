


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home/Home';
import Explore from '../screens/home/Explore';
import Library from '../screens/home/Library';

import { TransitionPresets } from '@react-navigation/stack';
import { Platform } from 'react-native';

export type AppStackParamList = {
    Home: undefined;
    Explore: undefined;
    Library: undefined;

}

const Stack = createNativeStackNavigator<AppStackParamList>();


export const AppStack = () => {
    { console.log("DEBUG INSIDE AppStack") } 
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // This will hide the default header
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                animation: 'slide_from_right',
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Library" component={Library} />
            
        </Stack.Navigator>
    )
}





