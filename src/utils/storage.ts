import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAT_KEY = "medical_ai_chat_history";

export const storage = {
  async saveChats(data: any) {
    await AsyncStorage.setItem(
      CHAT_KEY,
      JSON.stringify(data)
    );
  },

  async loadChats() {
    const data =
      await AsyncStorage.getItem(
        CHAT_KEY
      );

    return data
      ? JSON.parse(data)
      : [];
  },

  async clearChats() {
    await AsyncStorage.removeItem(
      CHAT_KEY
    );
  },
};