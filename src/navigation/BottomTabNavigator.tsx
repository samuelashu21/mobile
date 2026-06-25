import React from "react";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import ChatScreen from "../screens/ChatScreen";

import ExplainScreen from "../screens/ExplainScreen";

import SavedChatsScreen from "../screens/SavedChatsScreen";

import SettingsScreen from "../screens/SettingsScreen";

const Tab =
  createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
      />

      <Tab.Screen
        name="Explain"
        component={
          ExplainScreen
        }
      />

      <Tab.Screen
        name="Saved"
        component={
          SavedChatsScreen
        }
      />

      <Tab.Screen
        name="Settings"
        component={
          SettingsScreen
        }
      />
    </Tab.Navigator>
  );
}