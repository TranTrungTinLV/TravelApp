import React from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const window = Dimensions.get('screen');
const { height } = window;
const Gallery = ({ route, navigation }) => {
    const { images } = route?.params || {};
    const onBack = () => {
        navigation.goBack();
    }
    console.log(images)
    return (
        <SafeAreaView style={{ flex: 1, paddingVertical: 32 }}>
            <View>
                <FlatList style={styles.showImage} data={images} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )} keyExtractor={item => String(item)} />
                <TouchableOpacity onPress={onBack} style={styles.backContainer} >
                    <Image source={require('../../../assets/Group 6.png')} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    showImage: {
        padding: 22
    },
    image: {
        width: '100%',
        height: (height - 30) / 2,
        marginBottom: 24,
        borderRadius: 20,
        backgroundColor: 'rgba(171, 150, 140, 0.1)'
    },
    backContainer: {
        position: 'absolute',
        paddingTop: 18,
        paddingLeft: 30
    },
    backIcon: {
        width: 42,
        height: 42,
        marginVertical: 20
    }
})

export default Gallery;