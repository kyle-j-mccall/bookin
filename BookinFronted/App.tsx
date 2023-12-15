import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import Dashboard from "./components/Dashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
