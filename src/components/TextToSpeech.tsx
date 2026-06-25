import React from "react";

import {
  Button,
} from "react-native";

import * as Speech
from "expo-speech";

interface Props {
  text: string;
}

export default function TextToSpeech({
  text,
}: Props) {
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <Button
      title="Read Answer"
      onPress={speak}
    />
  );
}