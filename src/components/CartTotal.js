import { View, Text, StyleSheet, Button } from "react-native";

const CartTotal = ({ cart }) => {
  return (
    <>
      {cart.length !== 0 ? (
        <View style={styles.cart_container}>
          <View style={styles.cart_flex}>
            <View style={styles.cart_total_text}>
              <Text>Total</Text>
            </View>

            <View style={styles.cart_total_price}>
              <Text>
                $
                {cart &&
                  cart.reduce(function (sum, item) {
                    return (sum = sum + item.price);
                  }, 0)}
              </Text>
            </View>
          </View>
          <View style={styles.cart_button_container}>
            <Button title="Place order" color="#201C26" />
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  cart_container: {
    width: "100%",
    padding: 45,
  },

  cart_flex: {
    display: "flex",
    flexDirection: "row",
  },
  cart_total_text: {
    flex: 1,
  },
  cart_text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  cart_total_price: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  cart_button_container: {
    marginTop: 20,
  },
  cart_button: {
    borderRadius: 10,
  },
});

export default CartTotal;
