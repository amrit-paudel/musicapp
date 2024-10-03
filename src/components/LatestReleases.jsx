import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyReleases = [
    { id: '1', title: 'Album 1', type: 'Album' },
    { id: '2', title: 'Song 1', type: 'Song' },
    { id: '3', title: 'Album 2', type: 'Album' },
    { id: '4', title: 'Song 2', type: 'Song' },
];

const LatestReleases = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Latest Releases</Text>
            <FlatList
                data={dummyReleases}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.type}>{item.type}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    type: {
        fontSize: 14,
        color: '#666',
    },
});

export default LatestReleases;

