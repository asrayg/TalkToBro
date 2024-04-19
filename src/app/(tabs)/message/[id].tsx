import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AudioLines, ChevronLeft } from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/theme/colors";
import { conversationMessages, messagesArray } from "@/utils/messages";
import { ConversationMessage } from "@/components/ConversationMessage";

export default function Home() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const userData = messagesArray.find((item) => item.id === id);

  const handleBack = () => {
    router.back();
  };

  if (!userData) {
    handleBack();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.zinc[200]} />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.headerBackButton}>
          <ChevronLeft size={24} color={colors.zinc["600"]} />
        </TouchableOpacity>
        <View style={styles.headerUserInfo}>
          <Image style={styles.headerUserAvatar} source={userData?.avatar} />
          <Text style={styles.headerUserName}>{userData?.name}</Text>
        </View>
        <View style={{ width: 40, height: 40 }} />
      </View>

      <FlatList
        data={conversationMessages}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return <ConversationMessage data={item} />;
        }}
        contentContainerStyle={{
          padding: 16,
          gap: 10,
        }}
      />
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === "ios"}
        style={styles.inputWrapper}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={colors.zinc[400]}
            placeholder="To: company name"
          />
          <TouchableOpacity style={styles.iconContainer}>
            <AudioLines size={24} color={colors.zinc["600"]} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.zinc[100],
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.zinc["200"],
    padding: 16,
    paddingTop: 46,
  },
  headerBackButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  headerUserInfo: {
    alignItems: "center",
    gap: 4,
  },
  headerUserAvatar: {
    width: 40,
    height: 40,

    borderRadius: 40,
    resizeMode: "cover",
  },
  headerUserName: {
    fontSize: 11,
    lineHeight: 13,
    color: colors.zinc["800"],
  },

  inputWrapper: {
    width: "100%",
    backgroundColor: colors.zinc[50],
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },

  inputContainer: {
    flexDirection: "row",
    gap: 8,
    height: 32,
    borderWidth: 1,
    borderColor: colors.zinc[300],
    borderRadius: 32,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    flex: 1,
  },
  iconContainer: {},
});
