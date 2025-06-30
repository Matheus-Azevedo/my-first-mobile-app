import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Button from "@/components/button"; // ajuste o caminho se necessário
import Input from "@/components/input"; // ajuste o caminho se necessário
import { useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";

export default function Index() {
  const [text, setText] = useState("");
  const { userName, setUserName } = useUser();
  const router = useRouter();

  function showAlert() {
    Alert.alert("Hello", `You typed: ${text}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the First App!</Text>
      <Input placeholder="Type here..." onChangeText={setText} />
      <Input
        placeholder="Set User here..."
        onChangeText={setUserName}
        value={userName || ""}
      />
      <Button title="Show Alert" onPress={showAlert} />
      <Button title="About" onPress={() => router.push("/about")} />
      <Button title="Register" onPress={() => router.push("/users/register")} />
      <Button
        title="Ver usuário 42"
        onPress={() =>
          router.push({ pathname: "/users/[id]", params: { id: "42" } })
        }
      />
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
