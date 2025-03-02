import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Button
        title="To second screen"
        onPress={() => navigation.navigate("Test")}
      />
      <Button title="To AR" onPress={() => navigation.navigate("AR")} />
      <Button title="To Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
}
