import React from 'react'
import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons';


const { width } = Dimensions.get('screen')
const Expand = ({ navigation, route }) => {
    const { item } = route?.params || {};
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    }
    const onBack = () => {
        navigation.goBack()
    }
    const mapStyle = [
      { "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] },
        {
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#746855', // Màu chữ trên bản đồ
                },
            ],
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    color: '#242f3e', // Màu viền chữ trên bản đồ
                },
            ],
        },
    ];
    return (
        <View style={styles.container} >
            <MapView
                style={styles.maps}
                initialRegion={coords}
                
            >
                <Marker
                    coordinate={coords}
                    title={item?.name}
                />
            </MapView>
            <View style={{ backgroundColor: '#9ca3af', opacity:1, position: 'absolute', width: width - 48, flexDirection: 'row', top: 50, borderRadius: 15, margin: 24, padding: 16, alignItems: 'center', gap: 34 }}>
                <TouchableOpacity onPress={onBack}>
                    <Entypo name="arrow-bold-left" size={40}  color="black" style={{height: 41, width: 41}} />

                </TouchableOpacity>
                <Text style={{fontSize: 20}}>{item?.name}-{item?.city}</Text>
                {/* <Text style={}>
                        Back
                    </Text> */}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    maps: {
        // paddingTopTop: 30,
        width: '100%',
        // backgroundColor: 'black',
        height: '100%',
        // opacity: 0.6,
        // borderRadius: 20,
        // padding: 40
    }
})

export default Expand
