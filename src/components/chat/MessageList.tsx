import React from "react";

import {
  FlatList,
} from "react-native";

import ChatBubble
from "./ChatBubble";

interface Props {
  messages: any[];
}

export default function MessageList({
  messages,
}: Props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) =>
        item.id
      }
      renderItem={({
        item,
      }) => (
        <ChatBubble
          role={item.role}
          content={
            item.content
          }
        />
      )}
    />
  );
}