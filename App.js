import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import HomeStack from "./src/navigation/HomeStack";

import { useState } from "react";
// import {} from 'react-navigation'

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState([]);

  return (
    <View style={styles.container}>
      <HomeStack
        cart={cart}
        setCart={setCart}
        selectedDrink={selectedDrink}
        setSelectedDrink={setSelectedDrink}
      ></HomeStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
