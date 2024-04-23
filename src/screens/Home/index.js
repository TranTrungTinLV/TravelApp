import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Title from "../../components/title";
import Categories from '../../components/category'
import AtractionCard from "../../components/AtractionCard";
import jsonData from '../../data/attraction.data'
const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [data,selectedData] = useState([])

    useEffect(
        () => {
            console.log('jsonData >>', jsonData) 
            selectedData(jsonData)
        },[]
    )
    return (
        <SafeAreaView>
        <ScrollView style={{margin: 32}}>
            <Title text="Where Do" />
            <Title text="You Want To Go" style={{fontWeight: 'bold'}}/>
            <Title text="Explore Attraction" style={styles.header3}/>
            <Categories 
            selectedCategory={selectedCategory} 
            onPressCategory = {setSelectedCategory}
            categories={['All','Popular','Historical','Most Viewed', 'Most Visited','Random']} 
            style={styles.textCategory} />
            
            <ScrollView contentContainerStyle={styles.row}>
           {
            [...data,...data]?.map((item,index) => (
                <AtractionCard 
                style={index % 2 === 0 ? {marginRight: 12} : {}}
                key={item.id}
                description={item.name}
                subdescription = {item.city}
                imageSrc={item.images[0]}/>
            ))
           }
        
            </ScrollView>
        </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header3: {
        marginTop: 40,
        marginBottom: 18,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    textCategory: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
        paddingVertical: 2,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
})

export default Home;