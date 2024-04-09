import { colors } from "@/theme/colors";
import { conversationMessages } from "@/utils/messages";
import { StyleSheet, Text, View } from "react-native";

type ConversationMessageProps = {
  data: (typeof conversationMessages)[0];
};

export const ConversationMessage = (props: ConversationMessageProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          alignSelf: props.data.amISender ? "flex-end" : "flex-start",
          backgroundColor: props.data.amISender
            ? colors.blue["normal"]
            : colors.zinc["300"],
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: props.data.amISender
              ? colors.zinc["100"]
              : colors.zinc["900"],
          },
        ]}
      >
        {props.data.text}
      </Text>
      <View style={styles.bubbleArrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    backgroundColor: "red",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 15,
  },

  text: {
    fontSize: 17,
    lineHeight: 22,
  },

  bubbleArrow: {
    width: 20,
    height: 20,
    backgroundColor: "tomato",
    position: "absolute",
    bottom: 0,
    right: -12,
  },
});
