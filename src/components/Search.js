import React, { useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Search = ({ setCocktails }) => {
  const SearchCocktail = async (e) => {
    if (e !== "") {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`
      );
      const data = await response.json();

      if (data) {
        const newData = [...data.drinks];
        for (let i = 0; i < data.drinks.length; i++) {
          newData[i].price = Math.floor(Math.random() * (30 - 10) + 10);
        }
        setCocktails(newData);
      }
    }
  };

  return (
    <View style={styles.search_bar} className="search">
      <Icon name="search1" size={15} style={{ marginTop: 2, marginLeft: 2 }} />
      <TextInput
        style={styles.input_text}
        placeholder="Search Cocktail..."
        onChangeText={(e) => SearchCocktail(e)}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  search_bar: {
    height: 35,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: "#F3F3F4",
    color: "#878787",
    paddingLeft: 15,
    paddingTop: 2,
  },
  input_text: {
    width: "100%",
    height: 25,
    paddingLeft: 5,
  },
});

export default Search;
