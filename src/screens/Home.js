import { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = ({ navigation, cart, setCart }) => {
  const [cocktails, setCocktails] = useState([]);
  // const [cart, setCart] = useState([]);

  const getCocktails = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await response.json();
    if (data) setCocktails(data);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <View style={styles.Home}>
      <Header setCocktails={setCocktails} cart={cart}></Header>
      <Products cocktails={cocktails} cart={cart} setCart={setCart}></Products>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
  },
});

export default Home;
