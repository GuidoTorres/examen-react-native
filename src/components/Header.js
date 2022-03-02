import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import Search from "./Search";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/AntDesign";
const Header = ({ setCocktails, cart }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header_container}>
      <View style={styles.header_left}>
        <Search setCocktails={setCocktails} />
      </View>
      <View style={styles.header_right}>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigation.navigate("Cart")}
        >
          <Icon name="shoppingcart" size={20}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  header_left: {
    flex: 6,
  },

  header_right: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "purple",
  },
  cart: {
    height: 35,
    width: 35,
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: "#F3F3F4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
