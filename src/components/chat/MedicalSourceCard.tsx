import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  question: string;
  answer: string;
  similarity: number;
}

export default function MedicalSourceCard({
  question,
  answer,
  similarity,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Retrieved Evidence
      </Text>

      <Text>
        {question}
      </Text>

      <Text
        numberOfLines={3}
      >
        {answer}
      </Text>

      <Text>
        Similarity:
        {" "}
        {similarity.toFixed(3)}
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    card: {
      padding: 12,
      marginVertical: 8,
      backgroundColor:
        "#fff",
      borderRadius: 12,
    },

    title: {
      fontWeight: "700",
      marginBottom: 8,
    },
  });