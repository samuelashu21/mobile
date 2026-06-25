import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function ChatHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Multilingual Medical AI
      </Text>

      <Text style={styles.subtitle}>
        English • Amharic • RAG
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  subtitle: {
    color: "#666",
  },
});