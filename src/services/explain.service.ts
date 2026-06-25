import { api } from "./api";

import {
  ExplainRequest,
  ExplainResponse,
} from "../types/api";

export const explainService = {
  async explain(
    payload: ExplainRequest
  ): Promise<ExplainResponse> {
    const response =
      await api.post(
        "/explain/explain",
        payload
      );

    return response.data;
  },
};