import { ScrollView, StyleSheet, View } from "react-native";
import { MainHeader } from "@/components/MainHeader";
import { colors } from "@/theme/colors";
import { Message } from "@/components/Message";
import { messagesArray } from "@/utils/messages";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Home() {
  const [search, setSearch] = React.useState("");
  const [messages, setMessages] = React.useState(messagesArray);

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const handleSearch = () => {
    setMessages(
      messagesArray.filter(
        (message) =>
          message.name.includes(search) || message.message.includes(search)
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.zinc[100]} />
      <MainHeader
        onSearch={handleSearch}
        search={search}
        onSearchChange={handleSearchChange}
      />

      <View style={styles.messageContainer}>
        {messages.map((item) => (
          <Message key={item.id} data={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.zinc[100],
  },

  messageContainer: {
    flex: 1,
    gap: 8,
    padding: 16,
    paddingBottom: 46,
  },
});
