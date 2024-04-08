import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import { Ellipsis, Mic, Search, SquarePen } from "lucide-react-native";
import { colors } from "@/theme/colors";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent barStyle={"dark-content"} />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Messages</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerRightMoreButton}>
              <Ellipsis size={20} color={colors.zinc["100"]} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.headerRightWriteButton}>
              <SquarePen size={20} color={colors.zinc["100"]} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerSearchContainer}>
          <Search size={20} color={colors.zinc[400]} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            numberOfLines={1}
            multiline={false}
            keyboardType="web-search"
          />
          <Mic size={20} color={colors.zinc[400]} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },

  header: {
    paddingHorizontal: 12,
    paddingTop: 46,
    backgroundColor: colors.zinc[100],
    gap: 10,
    paddingBottom: 15,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 34,
    fontWeight: "bold",
  },

  headerRight: {
    flexDirection: "row",
    gap: 24,
  },

  headerRightMoreButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.zinc["300"],
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  headerRightWriteButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.blue["normal"],
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  headerSearchContainer: {
    flexDirection: "row",
    gap: 8,
    height: 36,
    backgroundColor: colors.zinc[200],
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  searchInput: {
    flex: 1,
  },
});
