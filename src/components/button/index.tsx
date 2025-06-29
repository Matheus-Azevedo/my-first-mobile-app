import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.buttonContainer}
      {...rest}
    >
      <Text style={styles.buttonText}>{title || "Click Me"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
