import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Dimensions, Image, Pressable, TouchableOpacity } from "react-native";
import Title from "../../components/title";
import InfoCard from "../../components/Infocard";


const screen = Dimensions.get('window')
const { height } = screen

const Attraction = ({ navigation, route }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;
    const onBack = () => {
        navigation.goBack()
    }

    const onGalleryNavigate = () => {
        navigation.navigate('Gallery', { images: item?.images })
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainImage} imageStyle={{ borderRadius: 20 }} source={{ uri: mainImage }}>
                <View style={styles.header} >
                    <Pressable onPress={onBack} hitSlop={5}>
                        <Image style={styles.icon} source={require('../../../assets/Group 6.png')} />
                    </Pressable>
                    <Pressable onPress={onBack} hitSlop={5}>
                        <Image style={styles.icon} source={require('../../../assets/Group 5.png')} />
                    </Pressable>
                </View>
                <Pressable style={styles.footer}>
                    {slicedImages?.map((image, index) => (
                        <View key={image}>
                            <TouchableOpacity onPress={onGalleryNavigate}><Image source={{ uri: image }} style={styles.miniImage} /></TouchableOpacity>
                            {diffImages > 0 && index === slicedImages?.length - 1 ? (
                                <View style={styles.moreImagesContainer}>
                                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                </View>
                            ) : null}
                        </View>))}
                </Pressable>
            </ImageBackground>
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Title style={styles.name} text={item?.name}></Title>
                    <Text style={styles.city}>{item?.city}</Text>
                </View>
                <Title style={styles.price} text={item?.entry_price}></Title>
            </View>

            <View style={styles.groupIcon}>
                <InfoCard text={item?.address} icon={require('../../../assets/Group 15.png')} />
                <InfoCard text={`OPEN\n${item?.address}`} style={styles.timeWorking} icon={require('../../../assets/Group 16.png')} />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 32
    },
    mainImage: {
        width: '100%',
        height: height / 2,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(256, 256, 256, 0.35)',
        margin: 16,
        paddingHorizontal: 8,
    },
    miniImage: {
        width: 40,
        height: 40,
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 10,
    },
    moreImages: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    moreImagesContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.38)',
        width: 40,
        height: 40,
        top: 8,
        left: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        marginTop: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    city: {
        fontSize: 18,
        fontWeight: 'normal',
        marginTop: 15
    },
    name: {
        // fontSize: 30,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 1)'
        // marginTop:48
    },
    price: {
        marginTop: 13,
        fontSize: 30,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 1)'
    },
    groupIcon: {
        paddingTop: 16
    },
})
export default Attraction;
