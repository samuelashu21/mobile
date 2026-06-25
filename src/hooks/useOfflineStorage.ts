import { useEffect } from "react";

import {
  storage,
} from "../utils/storage";

export function useOfflineStorage(
  messages: any[]
) {
  useEffect(() => {
    storage.saveChats(
      messages
    );
  }, [messages]);
}