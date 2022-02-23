import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { FaSearch, FaArrowLeft, FaShoppingCart } from "react-icons/fa";

const Products = ({ cocktails, cart, setCart }) => {
  function renderImages() {
    return (
      cocktails.drinks &&
      cocktails.drinks.map((item, i) => {
        return (
          <TouchableOpacity key={item.idDrink}>
            <View>
              <Image
                key={item.idDrink}
                style={styles.image}
                source={item.strDrinkThumb}
              ></Image>
              <View style={styles.price_flex}>
                <View style={styles.price_flex_izquierda}>
                  <Text
                    style={styles.card_text}
                    numberOfLines={1}
                    ellipsizeMode="head"
                  >
                    {item.strDrink}
                  </Text>
                  <Text style={styles.card_text1}>
                    $150
                  </Text>
                </View>
                <View style={styles.price_flex_derecha}>
                  <TouchableOpacity
                    style={styles.addTo_cart}
                    onPress={() => addToCart(item)}
                  >
                    <FaShoppingCart />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })
    );
  }

  function addToCart(data) {
    setCart([
      ...cart,
      {
        img: data.strDrinkThumb,
        name: data.strDrink,
        // price: Math.floor(Math.random() * (30 - 10) + 10),
        price: 150,
      },
    ]);
  }

  return <View style={styles.card}>{renderImages()}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 15,
    padding: 25,
  },
  image: {
    width: 160,
    height: 220,
    borderRadius: 8,
    boxShadow: "2px 8px 10px lightgrey",
  },
  card_text: {
    marginTop: 5,
    fontWeight: "bold",
    color: "#111111",

    width: 100,
  },
  card_text1: {
    color: "#F85F5E",
    fontSize: 11,
  },
  price_flex: {
    display: "flex",
    flexDirection: "row",
  },
  price_flex_izquierda: {
    flex: 2,
  },
  price_flex_derecha: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  addTo_cart: {
    // border: "1px solid black",
    height: 35,
    width: 35,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Products;
