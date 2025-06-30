import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Button from "@/components/button"; // ajuste o caminho se necessário
import Input from "@/components/input"; // ajuste o caminho se necessário

export default function About() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my third page!</Text>
      <Input placeholder="Type your name..." onChangeText={setName} />
      <View style={styles.inputWrapper}>
        <Input
          placeholder="Type your password..."
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
          <Text
            style={{
              marginLeft: 8,
              fontSize: 18,
              position: "absolute",
              right: 14,
              transform: [{ translateY: -14 }],
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        That is my name: {name || "<?>"} and password: {password || "<?>"}!
      </Text>

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
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
});
