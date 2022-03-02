import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const DetailImage = ({ selectedDrink }) => {
  return (
    <SafeAreaView>
      <View style={styles.detail_container}>
        <Image
          style={styles.detail_image}
          source={{ uri: selectedDrink.strDrinkThumb }}
        />
      </View>
      <View style={styles.detail_category}>
        <Text style={styles.text_category}>{selectedDrink.strCategory}</Text>
      </View>
      <View style={styles.detail_name}>
        <Text style={styles.text_name}>{selectedDrink.strDrink}</Text>
      </View>
      <View style={styles.detail_ingredients}>
        <Text style={styles.text_ingredients}>Ingredients</Text>
      </View>

      <View style={styles.detail_ingredients}>
        <Text style={styles.text_instructions}>-</Text>
      </View>

      <View style={styles.detail_ingredients}>
        <Text style={styles.text_ingredients}>Instructions</Text>
      </View>
      <View style={styles.detail_instructions}>
        <Text style={styles.text_instructions}>
          {selectedDrink.strInstructions}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detail_container: {
    width: "100%",
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
  },
  detail_image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // boxShadow: "2px 8px 10px grey",
  },

  detail_category: {
    paddingLeft: 37,
    marginTop: -15,
  },
  text_category: {
    color: "#888888",
    fontSize: 15,
    fontWeight: "600",
  },
  detail_name: {
    paddingLeft: 37,
  },
  text_name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detail_ingredients: {
    paddingLeft: 37,
  },
  text_ingredients: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
  },
  detail_instructions: {
    paddingLeft: 37,
    paddingRight: 35,
  },
  text_instructions: {
    fontSize: 16,
    marginTop: 15,
  },
});

export default DetailImage;
