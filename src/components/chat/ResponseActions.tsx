import React from "react";

import {
  View,
  StyleSheet,
} from "react-native";

import TextToSpeech
from "../TextToSpeech";

interface Props {
  answer: string;
}

export default function ResponseActions({
  answer,
}: Props) {
  return (
    <View style={styles.row}>
      <TextToSpeech
        text={answer}
      />
    </View>
  );
}

const styles =
  StyleSheet.create({
    row: {
      flexDirection:
        "row",
      marginTop: 8,
    },
  });