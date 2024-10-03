import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tabs = [
    { id: '1', title: 'Playlists' },
    { id: '2', title: 'Favourites' },
    { id: '3', title: 'Artists' },
    { id: '4', title: 'Albums' },
];

const LibraryTabs = ({ onTabPress }) => {
    const [selectedTab, setSelectedTab] = useState('Playlists');

    const handleTabPress = (tabTitle) => {
        setSelectedTab(tabTitle);
        onTabPress(tabTitle);

        console.log(`Selected Tab: ${tabTitle}`);
        // Handle tab press logic here
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.tab, selectedTab === item.title && styles.selectedTab]}
            onPress={() => handleTabPress(item.title)}
            
        >
            <Text style={styles.tabText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    flatList: {
        paddingHorizontal: 10,
    },

    tab: {
        marginRight: 10, // Reduced margin
        paddingVertical: 8, // Reduced padding
        paddingHorizontal: 12, // Reduced padding
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },

    selectedTab: {
        backgroundColor: '#e3dcd1',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default LibraryTabs;


