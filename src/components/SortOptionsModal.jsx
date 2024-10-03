// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const SortOptionsModal = ({ sortOption, setSortOption, toggleModal }) => {
//     const handleSortOption = (option) => {
//         setSortOption(option);
//         toggleModal();
//     };

//     return (
//         <View style={styles.overlay}>
//             <Animated.View style={styles.modal}>
//                 <View style={styles.modalHeader}>
//                     <Text style={styles.modalTitle}>Sort by</Text>
//                     <TouchableOpacity onPress={toggleModal}>
//                         <Icon name="close" size={24} style={styles.closeIcon}/>
//                     </TouchableOpacity>
//                 </View>
//                 <TouchableOpacity style={styles.option} onPress={() => handleSortOption('Recently Played')}>
//                     <Text style={styles.optionText}>Recently Played</Text>
//                     {sortOption === 'Recently Played' && <Icon name="check" size={20} style={styles.checkIcon} />}
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.option} onPress={() => handleSortOption('Recently Saved')}>
//                     <Text style={styles.optionText}>Recently Saved</Text>
//                     {sortOption === 'Recently Saved' && <Icon name="check" size={20} style={styles.checkIcon} />}
//                 </TouchableOpacity>
//             </Animated.View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     overlay: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-end',

        
//     },
//     modal: {
//         backgroundColor: '#edf5ef',
//         padding: 20,
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//     },
//     modalHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,

//     },
//     modalTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#000'
//     },
//     option: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 10,
//     },
//     optionText: {
//         fontSize: 16,
//         color: '#000'
//     },
//     checkIcon: {
//         color: '#000',
//         marginLeft: 10,
//     },

//     closeIcon:{
//         color: '#000',
//     }
// });

// export default SortOptionsModal;


import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SortOptionsModal = ({ visible, sortOption, setSortOption, toggleModal }) => {
    const slideAnim = useRef(new Animated.Value(0)).current;

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

    const handleSortOption = (option) => {
        setSortOption(option);
        toggleModal();
    };

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="none"
            onRequestClose={toggleModal}
        >
            <View style={styles.overlay}>
                <Animated.View style={[styles.modal, { transform: [{ translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [300, 0] }) }] }]}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Sort by</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Icon name="close" size={24} style = {styles.crossIcon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.option} onPress={() => handleSortOption('Recently Played')}>
                        <Text style={styles.optionText}>Recently Played</Text>
                        {sortOption === 'Recently Played' && <Icon name="check" size={20} style={styles.checkIcon} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => handleSortOption('Recently Saved')}>
                        <Text style={styles.optionText}>Recently Saved</Text>
                        {sortOption === 'Recently Saved' && <Icon name="check" size={20} style={styles.checkIcon} />}
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#000'
    },
    checkIcon: {
        color: '#000',
        marginLeft: 10,
    },
    crossIcon: {
        color: '#000',
        
    },
});

export default SortOptionsModal;

