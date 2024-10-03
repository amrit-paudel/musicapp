
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountOverlay = ({ visible, onClose }) => {
    const [slideAnim] = useState(new Animated.Value(0));

    useEffect(() => { 
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const slideUp = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [600, 0],
    });

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="none"
            onRequestClose={onClose}
        >
            <Animated.View style={[styles.overlayContainer, { transform: [{ translateY: slideUp }] }]}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Icon name="close" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Account</Text>
                </View>
                <View style={styles.content}>
                    <Image
                        source={{ uri: 'https://your-image-url-here.com' }} // Placeholder image URL
                        style={styles.profileImage}
                    />
                    <Text style={styles.userName}>User Name</Text>
                    <TouchableOpacity>
                        <Text style={styles.manageAccount}>Manage your account</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity style={styles.option}>
                        <Icon name="settings" size={24} color="#000" />
                        <Text style={styles.optionText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Icon name="history" size={24} color="#000" />
                        <Text style={styles.optionText}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Icon name="file-download" size={24} color="#000" />
                        <Text style={styles.optionText}>Downloads</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        // backgroundColor: "#9bbd9e" // DEBUG
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        color: "#000"
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: "#000"
    },
    content: {
        marginTop: 20,
        // backgroundColor: "#6686ba" // DEBUG
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: "#000",
    },
    manageAccount: {
        color: 'blue',
        textAlign: 'center',
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
        color: "#000",
    },
    logoutButton: {
        alignSelf: 'center',
        marginTop: 20,
        
    },
    logoutText: {
        color: 'red',
        fontSize: 16,
    },
});

export default AccountOverlay;


