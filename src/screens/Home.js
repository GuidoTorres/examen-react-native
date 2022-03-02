import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = ({ cart, setCart, setSelectedDrink }) => {
  const [cocktails, setCocktails] = useState();

  const getCocktails = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await response.json();
    if (data) {
      const newData = [...data.drinks];
      for (let i = 0; i < data.drinks.length; i++) {
        newData[i].price = Math.floor(Math.random() * (30 - 10) + 10);
      }
      setCocktails(newData);
    }
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <SafeAreaView style={styles.Home}>
      <Header setCocktails={setCocktails} cart={cart}></Header>
      <Categories setCocktails={setCocktails} />
      <Products
        cocktails={cocktails}
        cart={cart}
        setCart={setCart}
        setSelectedDrink={setSelectedDrink}
      ></Products>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Home: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
