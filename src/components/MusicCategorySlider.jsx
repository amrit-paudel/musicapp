

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const MusicCategorySlider = ({ title, data }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.trackTitle}>{item.title}</Text>
            <Text style={styles.trackDescription}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
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
        backgroundColor: '#e0e0e0', // Debugging background color
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        color: '#000', // Ensure the text color is visible
        // backgroundColor: '#ff0', // Debugging background color
    },
    list: {
        paddingLeft: 10,
    },
    card: {
        width: 150,
        height: 200,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'flex-end',
        padding: 10,
    },
    image: {
        width: '100%',
        height: '70%',
        borderRadius: 10,
    },
    trackTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    trackDescription: {
        fontSize: 12,
        color: '#666',
    },
});

export default MusicCategorySlider;

