import React, {
  useState,
} from "react";

import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";

import {
  IconButton,
} from "react-native-paper";

interface Props {
  onSend: (
    message: string
  ) => void;
}

export default function MessageInput({
  onSend,
}: Props) {
  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Ask a medical question..."
      />

      <IconButton
        icon="send"
        onPress={handleSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});