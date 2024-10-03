

import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use react-native-vector-icons
import AccountOverlay from "../components/AccountOverlay"

const Header = () => {

    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
    };


    return (
        <View style={styles.headerContainer}>
            {/* App Name */}
            <Text style={styles.appName}>Music</Text>

            {/* Icons on the right */}
            <View style={styles.iconsContainer}>
                {/* Search Icon */}
                {/* <TouchableOpacity style={styles.icon}>
                    <Icon name="search" size={24} color="black" />
                </TouchableOpacity> */}
                
                {/* Account Icon */}
                <TouchableOpacity style={styles.icon} onPress={toggleOverlay}>

                    <Image 
                        source={{ uri: 'https://your-image-url-here.com' }} // Placeholder image URL
                        style={styles.profileImage}
                    /> 

                    <Text style = {styles.accText} >Account</Text>
                </TouchableOpacity>
            </View> 
            <AccountOverlay visible={overlayVisible} onClose={toggleOverlay} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        elevation: 2,
        width: '100%'
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f02e65',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 20,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },

    accText:{
        color: '#000'
    }
});

export default Header; 


