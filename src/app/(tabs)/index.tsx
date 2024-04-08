import { ScrollView, StyleSheet, StatusBar, View } from "react-native";
import { MainHeader } from "@/components/MainHeader";
import { colors } from "@/theme/colors";
import { Message } from "@/components/Message";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent barStyle={"dark-content"} />
      <MainHeader />

      <View style={styles.messageContainer}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.zinc[50],
  },

  messageContainer: {
    flex: 1,
    gap: 8,
    padding: 16,
  },
});
