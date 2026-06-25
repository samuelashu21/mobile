import React, {
  useState,
  useRef,
} from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

import ChatBubble from "../components/ChatBubble";
import MessageInput from "../components/MessageInput";
import LanguageSelector from "../components/LanguageSelector";
import TypingIndicator from "../components/chat/TypingIndicator";

import { chatService } from "../services/chat.service";

import { useChatStore } from "../store/chatStore";

import { ChatMessage } from "../types/chat";

export default function ChatScreen() {
  const {
    messages,
    addMessage,
  } = useChatStore();

  const [language, setLanguage] =
    useState("english");

  const [loading, setLoading] =
    useState(false);

  const flatListRef =
    useRef<FlatList>(null);

  const handleSend = async (
    question: string
  ) => {
    if (!question.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),

      role: "user",

      content: question,

      timestamp:
        new Date().toISOString(),
    };

    addMessage(userMessage);

    setLoading(true);

    try {
      const response =
        await chatService.askQuestion({
          question,
          language,
        });

      const assistantMessage: ChatMessage =
        {
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

          cached:
            response.cached,

          sources:
            response.sources,

          timestamp:
            new Date().toISOString(),
        };

      addMessage(
        assistantMessage
      );

      setTimeout(() => {
        flatListRef.current?.scrollToEnd(
          {
            animated: true,
          }
        );
      }, 100);
    } catch (error) {
      console.error(error);

      Alert.alert(
        "Error",
        "Failed to get response from Medical AI."
      );
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({
    item,
  }: {
    item: ChatMessage;
  }) => (
    <ChatBubble
      role={item.role}
      content={item.content}
      confidence={
        item.confidence
      }
      responseTime={
        item.responseTime
      }
      cached={item.cached}
      sources={item.sources}
    />
  );

  return (
    <View style={styles.container}>
      <LanguageSelector
        value={language}
        onChange={setLanguage}
      />

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={
          false
        }
      />

      {loading && (
        <TypingIndicator />
      )}

      <MessageInput
        onSend={handleSend}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:
      "#F5F7FA",
  },
});