import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchMusic = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        // Handle search logic here
    };

    return (
        <View style={styles.container}>
            <Icon name="search" size={24} color="#fff" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search for music..."
                value={searchQuery}
                onChangeText={handleSearch}
                placeholderTextColor="#fff"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Center items vertically
        backgroundColor: '#2e0c09',
        borderRadius: 10, // Add border radius
        margin: 10, // Add margin
        padding: 10, // Add padding for better spacing
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#fff', // Ensure text color is white
    },
});

export default SearchMusic;

