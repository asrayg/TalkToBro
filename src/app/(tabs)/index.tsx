import { ScrollView, StyleSheet, View } from "react-native";
import { MainHeader } from "@/components/MainHeader";
import { colors } from "@/theme/colors";
import { Message } from "@/components/Message";
import { messagesArray } from "@/utils/messages";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="inverted" backgroundColor={colors.zinc[100]} />
      <MainHeader />

      <View style={styles.messageContainer}>
        {messagesArray.map((item) => (
          <Message key={item.id} data={item} />
        ))}
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
    paddingBottom: 46,
  },
});
