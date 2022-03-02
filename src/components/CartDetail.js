import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

const CartDetail = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <>
      {cart.length !== 0 ? (
        <FlatList
          data={cart}
          renderItem={({ item, i }) => (
            <View style={styles.cart_container} key={i}>
              <View style={styles.cart_left}>
                <Image
                  style={styles.cart_img}
                  source={{ uri: item.img }}
                ></Image>
              </View>
              <View style={styles.cart_center}>
                <Text style={styles.cart_text}>
                  {item.name}
                  {"\n"}${item.price}
                </Text>
              </View>
              <View style={styles.cart_rigth}>
                <TouchableOpacity style={styles.cart_button}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.cart_quantity}>1</Text>
                <TouchableOpacity style={styles.cart_button1}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      ) : (
        <Text style={styles.cart_empty}>Cart is empty</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cart_container: {
    padding: 35,

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  cart_left: {
    flex: 1,
    height: 60,
    width: 60,
    // borderWidth: 1,
    // borderColor: "purple",
  },
  cart_center: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cart_rigth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cart_img: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  cart_empty: {
    fontWeight: "bold",
    width: "100%",
    fontSize: 20,
    textAlign: "center",

    marginTop: 350,
  },
  cart_text: {
    fontWeight: "bold",
    fontSize: 14,
  },
  cart_button: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    fontWeight: "bold",
  },
  cart_button1: {
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    fontWeight: "bold",
  },
  cart_quantity: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    textAlign: "center",
  },
});

export default CartDetail;
