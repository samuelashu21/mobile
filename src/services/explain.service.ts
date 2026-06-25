import { api } from "./api";

export const explainService = {
  async explain(question: string) {
    const response = await api.post("/explain/explain", {
      question,
    });

    return response.data;
  },
}; 