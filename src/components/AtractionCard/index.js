import React from "react";
import { Image, StyleSheet, Text, View,Dimensions } from "react-native";



const screen = Dimensions.get('window')
const {width} = screen
function Attraction({imageSrc, description,subdescription,style}) {
    return (
        <View style={[styles.card,style]}>
            <Image source={{uri: imageSrc}} style={styles.image}/>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.groupImage}>
                <Image 
                style = {{width: 8, height: 8, marginRight: 4}}
                source={{uri: 'https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-location-icon-png-image_515424.jpg'}}/>
                <Text style={styles.subdescription}>{subdescription}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // marginRight: 8,
        marginTop: 8,
        
        borderWidth: 1,
        borderColor: '#E2E2E2',
        padding: 4
    },
    image: {
        width: (width - 96) / 2,
        borderRadius: 15,
        height: 120
    },
    description: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 12,
        marginLeft: 6
    },
    subdescription: {
        fontSize: 12,
        marginLeft:3,
        fontWeight: '300',
    },
    groupImage: {
        flexDirection: 'row', 
        alignItems: "center", 
        marginLeft: 6,
        marginTop: 4,
        marginBottom:12
    }
})

export default React.memo(Attraction);