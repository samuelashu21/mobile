import React from "react";

import {
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";

interface Props {
  chats: any[];
  onSelect: (
    chat: any
  ) => void;
}

export default function ChatHistory({
  chats,
  onSelect,
}: Props) {
  return (
    <FlatList
      data={chats}
      keyExtractor={(_, i) =>
        i.toString()
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            onSelect(item)
          }
        >
          <Text>
            {item[0]?.content}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}