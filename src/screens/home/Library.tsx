



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// import LibraryTabs from '../../components/LibraryTabs';
// import RecentActivity from '../../components/RecentActivity';


// const Library = () => {
//     {console.log("DEBUG INSIDE Home")} 
//     return (
//         <View style={styles.container}>
//             <Header />

//             {/* Your screen content here */}
//             {/* horizontal tabs */}
//             <LibraryTabs/>

//             {/* Recent Activity */}
//             <RecentActivity />

//             <View style={styles.content}>
//                 <Text style={styles.homeText}>Library Screen</Text>
//             </View>

//             <Footer />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     homeText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#333333',
//         textAlign: 'center',
//         margin: 10,
//     },
// });

// export default Library;




import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LibraryTabs from '../../components/LibraryTabs';
import RecentActivity from '../../components/RecentActivity';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SortOptionsModal from '../../components/SortOptionsModal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Library = () => {
    const [sortOption, setSortOption] = useState('Recently Played');
    const [modalVisible, setModalVisible] = useState(false);

    const [selectedTab, setSelectedTab] = useState('Playlists');

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <Header />

            {/* Horizontal tabs */}
            <LibraryTabs onTabPress={setSelectedTab} />

            {/* Recent Activity */}
            <View style={styles.recentActivity} >
                <View style={styles.recentActivityHeader}>
                    <TouchableOpacity style={styles.header} onPress={toggleModal}>
                        <Text style={styles.headerText}>{sortOption} <Icon name="keyboard-arrow-down" size={20} /></Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.recentActivityBody} >
                    <RecentActivity selectedTab={selectedTab} />
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.libraryText}>Library Screen</Text>
            </View>

            <Footer />

            <SortOptionsModal
                visible={modalVisible}
                sortOption={sortOption}
                setSortOption={setSortOption}
                toggleModal={toggleModal}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    recentActivityHeader: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    libraryText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        margin: 10,
    },

    recentActivityBody: {
        flex: 1,
        padding: 10,
    },

    recentActivity: {
        flex: 1,
        marginTop: 10,
    },
});

export default Library;



