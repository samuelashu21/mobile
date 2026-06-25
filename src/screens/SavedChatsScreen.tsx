import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
} from "react-native";

import ChatHistory from "../components/ChatHistory";

import { storage } from "../utils/storage";

export default function SavedChatsScreen() {
  const [chats, setChats] =
    useState<any[]>([]);

  useEffect(() => {
    storage
      .loadChats()
      .then(setChats);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ChatHistory
        chats={chats}
        onSelect={(chat) =>
          console.log(chat)
        }
      />
    </View>
  );
}