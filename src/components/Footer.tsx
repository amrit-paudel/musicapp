

// import { useNavigation, NavigationProp } from '@react-navigation/native';
// MAKING USE OF useNavigation( ) //  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

// We are navigating from a component that isn't directly a part of AppStack
// But a child like component of the components present in the Stack Navigator of AppStack

import React from 'react'; 
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use react-native-vector-icons

import { AppStackParamList } from '../routes/AppStack'; // Adjust path based on your folder structure

import { useNavigation, NavigationProp } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation<NavigationProp<AppStackParamList>>();

    return (
        <View style={styles.footerContainer}>
            {/* Home Icon */}
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
                <Icon name="home-outline" size={30} color="black" />
                <Text style={styles.iconLabel}>Home</Text>
            </TouchableOpacity>

            {/* Explore Icon */}
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Explore')}>
                <Icon name="compass-outline" size={30} color="black" />
                <Text style={styles.iconLabel}>Explore</Text>
            </TouchableOpacity>

            {/* Library Icon */}
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Library')}>
                <Icon name="library-outline" size={30} color="black" />
                <Text style={styles.iconLabel}>Library</Text>
            </TouchableOpacity>
        </View>
    );
};




const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F0F0F0',
        paddingVertical: 10,
    },
    icon: {
        alignItems: 'center',
    },
    iconLabel: {
        fontSize: 12,
        color: 'black',
        marginTop: 2,
    },
});

export default Footer;



