


import React from 'react';
import type { PropsWithChildren } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



// Navigation
import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


// screens
import Home from './screens/Home';
import Details from './screens/Details';


// The type annotations make it clear what parameters are expected for each screen
// we can pass different data to different screens
// different screens expects different data
// what kind of data they expects is given here
export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string }
};


// there are different types of navigation
// here I am using stack navigation

// <RootStackParamList>, becoz we need to tell what type of data 
//  we are passing, and expected by each screen 
const Stack = createNativeStackNavigator<RootStackParamList>()




function App1(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Trending Products'
          }}
        />

        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: 'Product Details'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  
  //  <View>
  //   <Text>Error checking</Text>
  //  </View>  
  );
}

export default App1

