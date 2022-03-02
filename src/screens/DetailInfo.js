import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import DetailImage from "../components/DetailImage";
import HeaderBack from "../components/HeaderBack";

const DetailInfo = ({ selectedDrink }) => {
  return (
    <SafeAreaView style={styles.detail}>
      <HeaderBack title={"Product Detail"} />
      <DetailImage selectedDrink={selectedDrink} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detail: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default DetailInfo;
