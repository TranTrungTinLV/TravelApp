import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Title = ({text,style}) => {
    return (
        <Text style={[styles.title, style]}>{text}</Text>
    )
}



const styles = StyleSheet.create(
    {
        title: {
            fontSize: 32,
            fontStyle: 'italic',
             color: '#4681A3',
        } 
    }
)

export default React.memo(Title);