import { api } from "./api";

import { cache } from "../utils/cache";

import {
  ChatRequest,
  ChatResponse,
} from "../types/api";

export const chatService = {
  async askQuestion(
    payload: ChatRequest
  ): Promise<
    ChatResponse & {
      cached?: boolean;
    }
  > {
    try {
      const cached =
        await cache.get(
          payload.question
        );

      if (cached) {
        console.log(
          "CACHE HIT"
        );

        return {
          answer:
            cached.answer,

          confidence:
            cached.confidence,

          response_time:
            cached.response_time,

          sources:
            cached.sources,

          cached: true,
        };
      }

      console.log(
        "CACHE MISS"
      );

      const response =
        await api.post(
          "/chat/chat",
          payload
        );

      await cache.set(
        payload.question,
        {
          question:
            payload.question,

          answer:
            response.data.answer,

          confidence:
            response.data.confidence,

          response_time:
            response.data
              .response_time,

          sources:
            response.data
              .sources,

          timestamp:
            new Date().toISOString(),
        }
      );

      return {
        ...response.data,
        cached: false,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};