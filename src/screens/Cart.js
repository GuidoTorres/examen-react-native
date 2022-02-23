import { View, Text, StyleSheet } from "react-native";
import CartDetail from "../components/CartDetail";
import CartTotal from "../components/CartTotal";
import HeaderBack from "../components/HeaderBack";

const Cart = ({ cart }) => {
  return (
    <View style={styles.cart_container}>
      <HeaderBack cart={cart} />
      <CartDetail cart={cart} />
      <CartTotal cart={cart} />
    </View>
  );
};

const styles = StyleSheet.create({
  cart_container: {
    backgroundColor: "white",
    height: "100vh",
  },
});

export default Cart;
