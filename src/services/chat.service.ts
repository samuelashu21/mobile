import { api } from "./api";

import {
  ChatRequest,
  ChatResponse,
} from "../types/api";

export const chatService = {
  async askQuestion(
    payload: ChatRequest
  ): Promise<ChatResponse> {
    const response =
      await api.post(
        "/chat/chat",
        payload
      );

    return response.data;
  },
};