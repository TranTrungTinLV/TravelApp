import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";

import AtractionCard from "../../components/AtractionCard";
import Categories from "../../components/category";
import Title from "../../components/title";
import jsonData from "../../data/attraction.data.json";
import categories from "../../data/categories.data.json";

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [data, setData] = useState([]);
  const ALL = "All";
  useEffect(() => {
    console.log("jsonData >>", jsonData);
    setData(jsonData);
  }, []);
  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filterData = jsonData?.filter((items) =>
        items?.categories?.includes(selectedCategory),
      );
      setData(filterData);
    }
  }, [selectedCategory]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={[...data]}
        style={{ flexGrow: 1, flex: 1 }}
        numColumns={2}
        ListEmptyComponent={
          <Text style={styles.empty}>Oh! Sorry it not exists</Text>
        }
        ListHeaderComponent={
          <>
            <View style={{ margin: 32 }}>
              <Title text="Where Do" />
              <Title text="You Want To Go" style={{ fontWeight: "bold" }} />
              <Title text="Explore Attraction" style={styles.header3} />
              <Categories
                selectedCategory={selectedCategory}
                onPressCategory={setSelectedCategory}
                categories={[ALL, ...categories]}
                style={styles.textCategory}
              />
            </View>
          </>
        }
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item, index }) => {
          return (
            <AtractionCard
              onPress={() => navigation.navigate("Attraction", { item })}
              key={item.id}
              style={
                index % 2 === 0
                  ? { marginRight: 12, marginLeft: 32 }
                  : { marginRight: 32 }
              }
              description={item.name}
              subdescription={item.city}
              imageSrc={item.images[0]}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header3: {
    marginTop: 40,
    marginBottom: 18,
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  textCategory: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 12,
    paddingVertical: 2,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  empty: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
});

export default Home;
