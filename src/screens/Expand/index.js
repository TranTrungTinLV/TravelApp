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
        // latitudeDelta: 0.009,
        // longitudeDelta: 0.009
    }
    const onBack = () => {
        navigation.goBack()
    }
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
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', position: 'absolute', width: width - 48, flexDirection: 'row', top: 50, borderRadius: 15, margin: 24, padding: 16, alignItems: 'center', gap: 34 }}>
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
        flex: 1
    },
    maps: {
        // paddingTopTop: 30,
        width: '100%',
        height: '100%',
        // borderRadius: 20,
        // padding: 40
    }
})

export default Expand
