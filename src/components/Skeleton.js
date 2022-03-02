import { View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Skeleton = () => {
  return (
    <View
      style={{
        backgroundColor: "#a0a0a0",
        borderColor: "#b0b0b0",
        width: width,
      }}
    ></View>
  );
};

export default Skeleton;
