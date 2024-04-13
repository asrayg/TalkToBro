import { colors } from "@/theme/colors";
import { conversationMessages } from "@/utils/messages";
import { StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient
        style={styles.bubbleArrow}
        colors={[
          colors.blue["normal"],
          colors.blue["normal"],
          "transparent",
          "transparent",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
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
    width: 12,
    height: 12,
    position: "absolute",
    top: 2,
    right: -8,
    borderTopLeftRadius: 12,
  },
});
