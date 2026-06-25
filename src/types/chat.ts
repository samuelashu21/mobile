export interface Source {
  question: string;
  answer: string;
  similarity: number;
}

export interface ChatMessage {
  id: string;

  role:
    | "user"
    | "assistant";

  content: string;

  confidence?: number;

  responseTime?: number;

  cached?: boolean;

  sources?: Source[];

  timestamp: string;
}