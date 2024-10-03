
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchMusic from '../../components/SearchMusic';
import LatestReleases from '../../components/LatestReleases';

type DataItem = {
    id: string;
    title: string;
    type: string;
};

const Explore = () => {
    const data: DataItem[] = []; // Add your data here if needed

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={data}
                ListHeaderComponent={() => (
                    <>
                        <SearchMusic />
                        <LatestReleases />
                        <Text style={styles.homeText}>Explore Screen</Text>
                        
                    </>
                )}
                
                renderItem={() => null} // Adjust this based on your data
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.scrollViewContent}
            />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollViewContent: {
        padding: 10,
    },
    homeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        margin: 10,
    },
});

export default Explore;

