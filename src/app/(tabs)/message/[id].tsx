import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SquarePen } from "lucide-react-native";
import { useLocalSearchParams } from "expo-router";

export default function Home() {
  const { id } = useLocalSearchParams();
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "900" }}>Message {id}</Text>
        <View>
          <TouchableOpacity>
            <SquarePen />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 46,
    flex: 1,
    padding: 16,
  },
});
