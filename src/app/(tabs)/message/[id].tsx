import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { ChevronLeft, SquarePen } from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/theme/colors";
import { messagesArray } from "@/utils/messages";

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
    <ScrollView style={styles.container}>
      <StatusBar style="inverted" backgroundColor={colors.zinc[200]} />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
