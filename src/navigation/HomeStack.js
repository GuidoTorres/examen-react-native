import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import DetailInfo from "../screens/DetailInfo";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

const HomeStack = ({ cart, setCart }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="Detail">
          {(props) => <DetailInfo {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Cart">
          {(props) => <Cart {...props} cart={cart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
