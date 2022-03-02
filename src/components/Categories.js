import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Categories = ({ setCocktails }) => {
  const [cat, setCat] = useState();
  const [selected, setSelected] = useState(false);

  const getCategories = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await response.json();
    if (data) setCat(data.drinks);
  };

  const handlePress = async (item) => {
    setSelected(item);

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${item}`
    );
    const data = await response.json();
    console.log(data);
    if (data) {
      const newData = [...data.drinks];
      for (let i = 0; i < data.drinks.length; i++) {
        newData[i].price = Math.floor(Math.random() * (30 - 10) + 10);
      }
      setCocktails(data.drinks);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        style={styles.category}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cat}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.strCategory)}
            style={[
              styles.categories_container,
              {
                backgroundColor:
                  selected === item.strCategory ? "#000000" : "white",
              },
            ]}
          >
            <Text
              style={[
                styles.text_category,
                {
                  color: selected === item.strCategory ? "white" : "#000000",
                },
              ]}
            >
              {item.strCategory}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  category: {
    paddingLeft: 20,
    paddingTop: 15,
  },

  categories_container: {
    width: 120,
    height: 45,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 6,
  },
  text_category: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Categories;
