import React, { useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Search = ({ setCocktails }) => {
  const SearchCocktail = async (e) => {
    if (e !== "") {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`
      );
      const data = await response.json();

      if (data) setCocktails(data);
    }
  };

  return (
    <View style={styles.search_bar} className="search">
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
    alignItems: "center",
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: "#F3F3F4",
    color: "#878787",
    paddingLeft: 5,
    paddingTop: 5,
  },
  input_text: {
    width: "100%",
    height: 25,
    paddingLeft: 5,
  },
});

export default Search;
