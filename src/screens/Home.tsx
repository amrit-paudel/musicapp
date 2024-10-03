
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App1'; 

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
// < 'where you are bringing in the types', 'which one you are bringing in' >




const Home = ({navigation}:HomeProps) => {

  // This Navigation props is by default available to us 
  // because of the Navigation Container that we have set up 
  // in the App.tsx

  //({navigation}:HomeProps): here we are defining the type that is coming in this screen
  // in this case, it's the Home type
  return (
    <View style = {styles.container} >
      <Text style = {styles.smallText} >Home Screen</Text>

      <Button
      title = 'Go to details' 
      onPress={ () => navigation.navigate("Details", {
        productId: '90'
      }) }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})

