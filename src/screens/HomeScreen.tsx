import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Button } from "react-native-paper";

export default function HomeScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Multilingual Medical AI Assistant
      </Text>

      <Text style={styles.subtitle}>
        Ask healthcare questions in
        English and Amharic using
        Retrieval-Augmented AI.
      </Text>

      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("Chat")
        }
      >
        Start Chat
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 24,
  },
});