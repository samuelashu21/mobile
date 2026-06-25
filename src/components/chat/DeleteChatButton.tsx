import React from "react";

import { Button } from "react-native";

import {
  storage,
} from "../../utils/storage";

export default function DeleteChatButton() {
  const clear = async () => {
    await storage.clearChats();
  };

  return (
    <Button
      title="Delete Saved Chats"
      onPress={clear}
    />
  );
}