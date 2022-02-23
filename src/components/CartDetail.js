import { View, Text, StyleSheet, Image } from "react-native";

const CartDetail = ({ cart }) => {
  return (
    <>
      {cart &&
        cart.map((item) => (
          <View style={styles.cart_container} key={item.idDrink}>
            <View style={styles.cart_left}>
              <Image style={styles.cart_img} source={item.img}></Image>
            </View>
            <View style={styles.cart_center}>
              <Text style={styles.cart_text}>
                Product:{"\n"}
                {item.name}
              </Text>
            </View>
            <View style={styles.cart_rigth}>
              <Text style={styles.cart_text}>${item.price}</Text>
            </View>
          </View>
        ))}

      {cart.length === 0 && (
        <Text style={styles.cart_empty}>Cart is empty</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cart_container: {
    padding: 35,

    display: "flex",
    flexDirection: " row",
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
});

export default CartDetail;
