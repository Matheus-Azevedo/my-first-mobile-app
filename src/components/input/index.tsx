import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface InputProps extends TextInputProps {}

export default function Input({ ...rest }: InputProps) {
  return <TextInput style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});
