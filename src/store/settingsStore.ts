import { create } from "zustand";

interface SettingsState {
  language: string;

  darkMode: boolean;

  setLanguage: (
    language: string
  ) => void;

  toggleDarkMode: () => void;
}

export const useSettingsStore =
  create<SettingsState>((set) => ({
    language: "english",

    darkMode: false,

    setLanguage: (
      language
    ) =>
      set({
        language,
      }),

    toggleDarkMode: () =>
      set((state) => ({
        darkMode:
          !state.darkMode,
      })),
  }));