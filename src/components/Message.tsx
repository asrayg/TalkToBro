import { colors } from "@/theme/colors";
import { Image, StyleSheet, Text, View } from "react-native";

export const Message = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/avatar.png")} style={styles.avatar} />
      <View style={styles.textsContainer}>
        <View style={styles.textsFirstRow}>
          <Text style={styles.textSenderName}>Daisy Tinsley</Text>
          <Text style={styles.textSentTime}>9:40 AM</Text>
        </View>
        <Text style={styles.textsMessagePreview} numberOfLines={2}>
          Maybe email isn't the best form of communication.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.zinc["200"],
    paddingBottom: 8,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    resizeMode: "cover",
  },
  textsContainer: {
    flex: 1,
  },
  textsFirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSenderName: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.zinc["900"],
    lineHeight: 22,
  },
  textSentTime: {
    fontSize: 15,
    color: colors.zinc["400"],
    lineHeight: 20,
  },
  textsMessagePreview: {
    fontSize: 15,
    color: colors.zinc["400"],
    lineHeight: 20,
  },
});
