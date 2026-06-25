import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  confidence: number;
}

export default function ConfidenceBar({
  confidence,
}: Props) {
  return (
    <View>
      <Text>
        Confidence:{" "}
        {(confidence * 100).toFixed(
          1
        )}
        %
      </Text>

      <View
        style={styles.track}
      >
        <View
          style={[
            styles.fill,
            {
              width: `${
                confidence * 100
              }%`,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles =
  StyleSheet.create({
    track: {
      height: 10,
      backgroundColor:
        "#ddd",
      borderRadius: 8,
      overflow: "hidden",
      marginTop: 8,
    },

    fill: {
      height: 10,
      backgroundColor:
        "#4CAF50",
    },
  });