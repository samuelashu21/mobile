import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBubble({
  role,
  content,
}: Props) {
  return (
    <View
      style={[
        styles.bubble,
        role === "user"
          ? styles.user
          : styles.assistant,
      ]}
    >
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
    maxWidth: "85%",
  },

  user: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },

  assistant: {
    alignSelf: "flex-start",
    backgroundColor: "#F1F1F1",
  },
});