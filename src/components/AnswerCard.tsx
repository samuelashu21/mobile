import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Source } from "../types/chat";

interface Props {
  answer: string;
  confidence: number;
  responseTime: number;
  sources: Source[];
}

export default function AnswerCard({
  answer,
  confidence,
  responseTime,
  sources,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.answer}>
        {answer}
      </Text>

      <Text>
        Confidence:{" "}
        {(confidence * 100).toFixed(
          1
        )}
        %
      </Text>

      <Text>
        Response Time:{" "}
        {responseTime}s
      </Text>

      <Text style={styles.header}>
        Sources
      </Text>

      {sources.map(
        (source, index) => (
          <View
            key={index}
            style={styles.source}
          >
            <Text>
              {source.question}
            </Text>

            <Text>
              Similarity:{" "}
              {source.similarity.toFixed(
                3
              )}
            </Text>
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },

  answer: {
    fontSize: 16,
    marginBottom: 12,
  },

  header: {
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 8,
  },

  source: {
    marginBottom: 8,
  },
});