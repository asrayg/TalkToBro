import { ScrollView, StyleSheet, StatusBar } from "react-native";
import { MainHeader } from "@/components/MainHeader";
import { colors } from "@/theme/colors";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent barStyle={"dark-content"} />
      <MainHeader />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.zinc[50],
  },
});
