import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondSreen";
import ARScreen from "./ARScreen";
import MapScreen from "./MapScreen";
import GpsScreen from "./GpsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Hello!", headerBackVisible: true }}
        />
        <Stack.Screen name="Test" component={SecondScreen} />
        <Stack.Screen name="AR" component={ARScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="GPS" component={GpsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
