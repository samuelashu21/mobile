import { useEffect } from "react";

import { chatService } from "../services/chat.service";

import { COMMON_QUESTIONS } from "../constants/commonQuestions";

export function useCacheWarmup() {
  useEffect(() => {
    async function warmup() {
      for (const question of COMMON_QUESTIONS) {
        try {
          await chatService.askQuestion(
            {
              question,
              language:
                "auto",
            }
          );
        } catch (error) {
          console.log(
            "Warmup failed:",
            question
          );
        }
      }
    }

    warmup();
  }, []);
}