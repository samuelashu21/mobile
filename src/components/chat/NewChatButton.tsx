import React from "react";

import { Button } from "react-native";

import {
  useChatStore,
} from "../../store/chatStore";

export default function NewChatButton() {
  const { clearChat } =
    useChatStore();

  return (
    <Button
      title="New Chat"
      onPress={clearChat}
    />
  );
}