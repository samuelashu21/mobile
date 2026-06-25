import { Source } from "./chat";

export interface ChatRequest {
  question: string;
  language: string;
}

export interface ChatResponse {
  answer: string;
  confidence: number;
  response_time: number;
  sources: Source[];
}

export interface ExplainRequest {
  question: string;
}

export interface ExplainResponse {
  retrieved_examples: Source[];
  similarity_scores: number[];
  reasoning: string;
}