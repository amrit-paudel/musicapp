

import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

// importing necessary components
import PlaylistSlider from '../../components/PlaylistSlider';
import MusicCategorySlider from '../../components/MusicCategorySlider';


// dummy data for music category 
const dummyData = [
    { id: '1', title: 'Song 1', description: 'Artist 1', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Song 2', description: 'Artist 2', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Song 3', description: 'Artist 2', image: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Song 4', description: 'Artist 2', image: 'https://via.placeholder.com/150' },
    { id: '5', title: 'Song 5', description: 'Artist 2', image: 'https://via.placeholder.com/150' },
    // Add more dummy data as needed
]




const Home = () => {

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    { console.log("DEBUG INSIDE Home") }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
                <Header />
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={styles.scrollViewContent}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            >
                {/* SCREEN CONTENT */}
                {/* horizontal playlist slider  */}
                <PlaylistSlider />

                {/* Music categories  */}
                <View style={styles.container}>
                    <MusicCategorySlider title="Recently Played" data={dummyData} />
                    <MusicCategorySlider title="Nepalese Music" data={dummyData} />
                    <MusicCategorySlider title="Bollywood/Indian Music" data={dummyData} />
                    <MusicCategorySlider title="English Music" data={dummyData} />
                    {/* Other components */}
                </View>
            </Animated.ScrollView>


            <View style={styles.content}>
                <Text style={styles.homeText}>Home Screenn</Text>
            </View>

            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60, // Adjust this to match your original header height
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        
    },

    scrollViewContent: {
        paddingTop: 60, // Ensure content starts below the header
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    homeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        margin: 10,
    },
});

export default Home;


