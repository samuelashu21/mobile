import React, {
  useState,
} from "react";

import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";

import ChatBubble from "../components/ChatBubble";
import MessageInput from "../components/MessageInput";
import LanguageSelector from "../components/LanguageSelector";

import { chatService }
from "../services/chat.service";

import {
  useChatStore,
} from "../store/chatStore";

export default function ChatScreen() {
  const {
    messages,
    addMessage,
  } = useChatStore();

  const [language, setLanguage] =
    useState("english");

  const handleSend =
    async (
      question: string
    ) => {
      addMessage({
        id: Date.now().toString(),
        role: "user",
        content: question,
        timestamp:
          new Date().toISOString(),
      });

      try {
        const response =
          await chatService.askQuestion(
            {
              question,
              language,
            }
          );

        addMessage({
          id: (
            Date.now() + 1
          ).toString(),

          role: "assistant",

          content:
            response.answer,

          confidence:
            response.confidence,

          responseTime:
            response.response_time,

          sources:
            response.sources,

          timestamp:
            new Date().toISOString(),
        });
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View style={styles.container}>
      <LanguageSelector
        value={language}
        onChange={setLanguage}
      />

      <FlatList
        data={messages}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (
          <ChatBubble
            role={item.role}
            content={
              item.content
            }
          />
        )}
      />

      <MessageInput
        onSend={handleSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});