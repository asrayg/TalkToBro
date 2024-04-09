import { conversationMessages } from "@/utils/messages";
import { StyleSheet, Text, View } from "react-native";

type ConversationMessageProps = {
  data: (typeof conversationMessages)[0];
};

export const ConversationMessage = (props: ConversationMessageProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.data.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    height: 300,
  },
});
