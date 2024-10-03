

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


const dummyPlaylists = [
    { id: '1', title: 'Playlist 1' },
    { id: '2', title: 'Playlist 2' },
    { id: '3', title: 'Playlist 3' },
];

const dummyFavourites = [
    { id: '1', title: 'Favourites 1' },
    { id: '2', title: 'Favourites 2' },
    { id: '3', title: 'Favourites 3' },
];

const dummyAlbums = [
    { id: '1', title: 'Albums 1' },
    { id: '2', title: 'Albums 2' },
    { id: '3', title: 'Albums 3' },
];

const dummyArtists = [
    { id: '1', title: 'Artists 1' },
    { id: '2', title: 'Artists 2' },
    { id: '3', title: 'Artists 3' },
];

const RecentActivity = ({ selectedTab }) => {
    let data;
    switch (selectedTab) {
        case 'Playlists':
            data = dummyPlaylists;
            break;
        case 'Favourites':
            data = dummyFavourites;
            break;
        case 'Artists':
            data = dummyArtists;
            break;
        case 'Albums':
            data = dummyAlbums;
            break;
        default:
            data = [];
    }


    return (
        <View style={styles.container}>

            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.playlistItem}>{item.title}</Text>}
                keyExtractor={item => item.id}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
       
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    playlistItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

        color: "#000"
    },
});

export default RecentActivity;


