import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SquarePen } from "lucide-react-native";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "900" }}>Hello World</Text>
        <View>
          <TouchableOpacity>
            <SquarePen />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
