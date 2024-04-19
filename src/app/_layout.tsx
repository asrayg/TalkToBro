import { colors } from "@/theme/colors";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 24, backgroundColor: colors.zinc[50] }}
    >
      <StatusBar backgroundColor={colors.zinc["100"]} style="dark" />
      <Slot />
    </SafeAreaView>
  );
}
