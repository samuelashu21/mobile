import React from "react";

import {
  View,
  Text,
  Switch,
} from "react-native";

import { useSettingsStore }
from "../store/settingsStore";

export default function SettingsScreen() {
  const {
    darkMode,
    toggleDarkMode,
  } =
    useSettingsStore();

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text>
        Dark Mode
      </Text>

      <Switch
        value={darkMode}
        onValueChange={
          toggleDarkMode
        }
      />
    </View>
  );
}