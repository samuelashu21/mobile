import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function CacheBadge() {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>
        ⚡ Cached
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    badge: {
      backgroundColor:
        "#E8F5E9",

      paddingHorizontal: 8,

      paddingVertical: 4,

      borderRadius: 12,

      alignSelf:
        "flex-start",

      marginBottom: 8,
    },

    text: {
      color: "#2E7D32",
      fontSize: 12,
      fontWeight: "600",
    },
  });