import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle={"dark-content"} />
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
