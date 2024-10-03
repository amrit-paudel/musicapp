
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dummyPlaylists = [
    { id: '1', name: 'Chill Vibes' },
    { id: '2', name: 'Workout Mix' },
    { id: '3', name: 'Top Hits' },
    { id: '4', name: 'Relaxing Music' },
    { id: '5', name: 'Party Time' },
];

const PlaylistSlider = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.playlistName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Playlists</Text>
            <FlatList
                data={dummyPlaylists}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        color: '#000',
    },
    list: {
        paddingLeft: 10,
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'flex-end',
        padding: 10,
    },
    imagePlaceholder: {
        flex: 1,
        backgroundColor: '#d0d0d0',
        borderRadius: 10,
    },
    playlistName: {
        fontSize: 12,
        color: '#333',
    },
});

export default PlaylistSlider;

