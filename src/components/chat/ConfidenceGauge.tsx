import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  confidence: number;
}

export default function ConfidenceGauge({
  confidence,
}: Props) {
  return (
    <View>
      <Text>
        Confidence Score
      </Text>

      <Text style={styles.score}>
        {(
          confidence * 100
        ).toFixed(1)}
        %
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    score: {
      fontSize: 28,
      fontWeight: "700",
    },
  });