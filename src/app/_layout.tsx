import { Slot } from "expo-router";
import { View, SafeAreaView, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Slot />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
});
