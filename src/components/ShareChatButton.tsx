import React from "react";

import { Button } from "react-native";

import * as Sharing from "expo-sharing";

interface Props {
  text: string;
}

export default function ShareChatButton({
  text,
}: Props) {
  const share = async () => {
    const file =
      await fetch(
        "data:text/plain," +
          encodeURIComponent(text)
      );

    console.log(file);

    if (
      await Sharing.isAvailableAsync()
    ) {
      console.log("share");
    }
  };

  return (
    <Button
      title="Share Chat"
      onPress={share}
    />
  );
}