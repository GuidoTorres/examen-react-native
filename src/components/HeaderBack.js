import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigation } from "@react-navigation/core";

const HeaderBack = ({ cart }) => {
  const navigation = useNavigation();

  console.log(cart);

  return (
    <View style={styles.header_container}>
      <View style={styles.header_left}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FaArrowLeft />
        </TouchableOpacity>
      </View>
      <View style={styles.header_center}>
        <Text style={styles.header_title}>Shopping Cart</Text>
      </View>
      <View style={styles.header_right}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
  },
  header_left: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  header_center: {
    flex: 2,

    justifyContent: "center",
    alignItems: "center",
  },
  header_right: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  header_title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default HeaderBack;
