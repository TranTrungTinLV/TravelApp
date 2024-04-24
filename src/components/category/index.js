import React from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"


     const Item = ({title,style,selectedCategory}) => (
        <Text style={[{color: 'black'},style]}>
            {title}
        </Text>

       )
       
const Categories = ({categories,style,selectedCategory,onPressCategory}) => {
   
    return (
         <FlatList
         
         style={{marginRight: -32}}
         showsHorizontalScrollIndicator={false}
         horizontal
         data={categories} 
         renderItem={({item}) => {
            const selected = selectedCategory === item;
          return ( 
            <TouchableOpacity onPress={() => onPressCategory(item)} style={[styles.itemContainer,selectedCategory, selected ? styles.selectedContainer : {}]}>
                <Item title={item} style={[style,selectedCategory, selected ? styles.selectedCategory : {}]}/>
            </TouchableOpacity>
           )
         }
         }
         keyExtractor={item => String(item)}

         />

         
    )
}

const styles = StyleSheet.create({
    selectedCategory: {
        fontWeight: 'bold',
        // textDecorationLine: 'underline'
    },
    itemContainer: {
        marginRight: 16,

        marginVertical: 14
    },
    selectedContainer: {
         borderBlockColor: '#4681A3',
         borderBottomWidth: 1
    }
})

export default React.memo(Categories);