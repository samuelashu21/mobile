import React from "react";

import {
  Button,
} from "react-native";

interface Props {
  onResult: (
    text: string
  ) => void;
}

export default function SpeechToText({
  onResult,
}: Props) {
  return (
    <Button
      title="Voice Input"
      onPress={() => {
        console.log(
          "Speech recognition integration"
        );
      }}
    />
  );
}