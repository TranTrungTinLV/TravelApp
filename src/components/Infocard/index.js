import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";




const screen = Dimensions.get('window')
const { width } = screen
const InfoCard = ({ icon, text, style }) => (
  <View>
    <View style={styles.groupImage}>
      <Image style={styles.icon} source={icon} />
      <Text style={[styles.title,style]}>{text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  groupImage: {
    width: (width) / 2,
    flexDirection: 'row',
    alignItems: "center",
    maxWidth: 340
    // marginLeft: 32,
    // marginTop: 4,
    // marginBottom: 12,
  },
  icon: {
    width: 42,
    height: 42,
    marginRight: 3
  },
  title: {
    fontSize: 10,
    fontWeight: '500'
  }
})
export default InfoCard;