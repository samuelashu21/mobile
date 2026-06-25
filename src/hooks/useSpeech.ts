import * as Speech
from "expo-speech";

export function useSpeech() {
  const speak = (
    text: string
  ) => {
    Speech.speak(text);
  };

  const stop = () => {
    Speech.stop();
  };

  return {
    speak,
    stop,
  };
}