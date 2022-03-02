import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/core";

const Products = ({ cocktails, cart, setCart, setSelectedDrink }) => {
  const navigation = useNavigation();

  const opacity = useRef(new Animated.Value(0)).current;
  console.log(cocktails);

  function renderImages() {
    function selectedProduct(e) {
      setSelectedDrink(e);

      navigation.navigate("Detail");
    }

    return (
      <FlatList
        contentContainerStyle={{
          display: "flex",

          paddingHorizontal: 25,
          paddingBottom: 180,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.idDrink}
        data={cocktails}
        numColumns={2}
        renderItem={(item) => (
          console.log(item.item),
          (
            <TouchableOpacity
              onPress={(e) => selectedProduct(item.item)}
              style={styles.card_container}
            >
              <View>
                <View style={styles.image_container}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.item.strDrinkThumb }}
                  ></Image>
                </View>
                <View style={styles.price_flex}>
                  <View style={styles.price_flex_izquierda}>
                    <Text
                      style={styles.card_text}
                      numberOfLines={1}
                      ellipsizeMode="head"
                    >
                      {item.item.strDrink}
                    </Text>
                    <Text style={styles.card_text1}>${item.item.price}</Text>
                  </View>
                  <View style={styles.price_flex_derecha}>
                    <TouchableOpacity
                      style={styles.addTo_cart}
                      onPress={() => addToCart(item.item)}
                    >
                      <Icon name="shoppingcart" size={18}></Icon>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        )}
      ></FlatList>
    );
  }

  function addToCart(data) {
    setCart([
      ...cart,
      {
        img: data.strDrinkThumb,
        name: data.strDrink,
        price: data.price,
        count: 1,
      },
    ]);
  }

  return <View style={styles.card}>{renderImages()}</View>;
};

const styles = StyleSheet.create({
  card_container: {
    width: "50%",
    marginTop: 10,
  },
  image_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "96%",
    height: 225,
    borderRadius: 8,
    // boxShadow: "2px 8px 10px grey",
  },
  card_text: {
    marginTop: 15,
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
    height: 35,
    width: 35,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Products;
