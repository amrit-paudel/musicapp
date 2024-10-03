
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App1'; 

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>
// < 'where you are bringing in the types', 'which one you are bringing in' >



const Details = ({ route, navigation }:DetailsProps) => { 

  const { productId } = route.params;
  console.log("DEBUG-- ProductId: "+productId) // DEBUG 

  return (
    <View style = {styles.container} > 
      <Text style = {[styles.smallText]} >Details HFHFH: {productId}</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}

export default Details

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

