import { useState } from "react";

import { chatService } from "../services/chat.service";

export function useChat() {
  const [loading, setLoading] =
    useState(false);

  const askQuestion =
    async (
      question: string,
      language: string
    ) => {
      setLoading(true);

      try {
        const result =
          await chatService.askQuestion({
            question,
            language,
          });

        return result;
      } finally {
        setLoading(false);
      }
    };

  return {
    askQuestion,
    loading,
  };
}