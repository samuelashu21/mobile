import React from "react";

import {
  View,
} from "react-native";

import {
  SegmentedButtons,
} from "react-native-paper";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function LanguageSelector({
  value,
  onChange,
}: Props) {
  return (
    <View>
      <SegmentedButtons
        value={value}
        onValueChange={onChange}
        buttons={[
          {
            value: "english",
            label: "English",
          },
          {
            value: "amharic",
            label: "Amharic",
          },
          {
            value: "auto",
            label: "Auto",
          },
        ]}
      />
    </View>
  );
}