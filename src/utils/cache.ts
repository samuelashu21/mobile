import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_KEY = "medical_ai_cache";

const CACHE_EXPIRATION =
  7 * 24 * 60 * 60 * 1000; // 7 days

export interface CachedAnswer {
  question: string;
  answer: string;
  confidence: number;
  response_time: number;
  sources: any[];
  timestamp: string;
}

type CacheMap = Record<
  string,
  CachedAnswer
>;

export const cache = {
  async get(
    question: string
  ): Promise<CachedAnswer | null> {
    try {
      const raw =
        await AsyncStorage.getItem(
          CACHE_KEY
        );

      const data: CacheMap =
        raw
          ? JSON.parse(raw)
          : {};

      const key =
        question
          .trim()
          .toLowerCase();

      const item = data[key];

      if (!item) {
        return null;
      }

      const age =
        Date.now() -
        new Date(
          item.timestamp
        ).getTime();

      if (
        age >
        CACHE_EXPIRATION
      ) {
        delete data[key];

        await AsyncStorage.setItem(
          CACHE_KEY,
          JSON.stringify(data)
        );

        return null;
      }

      return item;
    } catch (error) {
      console.error(
        "Cache read error:",
        error
      );

      return null;
    }
  },

  async set(
    question: string,
    answer: CachedAnswer
  ) {
    try {
      const raw =
        await AsyncStorage.getItem(
          CACHE_KEY
        );

      const data: CacheMap =
        raw
          ? JSON.parse(raw)
          : {};

      const key =
        question
          .trim()
          .toLowerCase();

      data[key] = answer;

      await AsyncStorage.setItem(
        CACHE_KEY,
        JSON.stringify(data)
      );
    } catch (error) {
      console.error(
        "Cache write error:",
        error
      );
    }
  },

  async remove(
    question: string
  ) {
    try {
      const raw =
        await AsyncStorage.getItem(
          CACHE_KEY
        );

      const data: CacheMap =
        raw
          ? JSON.parse(raw)
          : {};

      delete data[
        question
          .trim()
          .toLowerCase()
      ];

      await AsyncStorage.setItem(
        CACHE_KEY,
        JSON.stringify(data)
      );
    } catch (error) {
      console.error(error);
    }
  },

  async clear() {
    try {
      await AsyncStorage.removeItem(
        CACHE_KEY
      );
    } catch (error) {
      console.error(error);
    }
  },

  async size() {
    try {
      const raw =
        await AsyncStorage.getItem(
          CACHE_KEY
        );

      const data =
        raw
          ? JSON.parse(raw)
          : {};

      return Object.keys(data)
        .length;
    } catch {
      return 0;
    }
  },

  async getAll() {
    try {
      const raw =
        await AsyncStorage.getItem(
          CACHE_KEY
        );

      return raw
        ? JSON.parse(raw)
        : {};
    } catch {
      return {};
    }
  },
};