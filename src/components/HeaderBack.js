import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/AntDesign";

const HeaderBack = ({ cart, title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header_container}>
      <View style={styles.header_left}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="arrowleft" size={20}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.header_center}>
        <Text style={styles.header_title}>{title}</Text>
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
