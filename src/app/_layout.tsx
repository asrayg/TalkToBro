import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 24 }}>
      <StatusBar translucent style="inverted" />
      <Slot />
    </SafeAreaView>
  );
}
