import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/button"; // ajuste o caminho se necessário
import { useUser } from "@/context/UserContext";

export default function About() {
  const router = useRouter();
  const { userName } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my second page!</Text>
      <Text style={styles.text}>{userName}</Text>
      <Button title="Back" onPress={router.back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});
