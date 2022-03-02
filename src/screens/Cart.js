import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import CartDetail from "../components/CartDetail";
import CartTotal from "../components/CartTotal";
import HeaderBack from "../components/HeaderBack";

const Cart = ({ cart, setCart }) => {
  return (
    <SafeAreaView style={styles.cart_container}>
      <HeaderBack cart={cart} title={"Shopping Cart"} />
      <CartDetail cart={cart} setCart={setCart} />
      <CartTotal cart={cart} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cart_container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Cart;
