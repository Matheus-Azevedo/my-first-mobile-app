import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Button from "@/components/button"; // ajuste o caminho se necessário
import Input from "@/components/input"; // ajuste o caminho se necessário

export default function Index() {
  const [text, setText] = useState("");

  function showAlert() {
    Alert.alert("Hello", `You typed: ${text}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the First App!</Text>
      <Input placeholder="Type here..." onChangeText={setText} />
      <Button title="Show Alert" onPress={showAlert} />
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
