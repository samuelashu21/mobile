import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function TypingIndicator() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Medical AI is thinking...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },

  text: {
    fontStyle: "italic",
    color: "#666",
  },
});