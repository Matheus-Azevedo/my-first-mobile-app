import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>User ID: {id}</Text>
    </View>
  );
}
