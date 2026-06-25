import React, {
  useState,
} from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Collapsible
from "react-native-collapsible";

import { Source }
from "../types/chat";

interface Props {
  sources: Source[];
}

export default function SourceAccordion({
  sources,
}: Props) {
  const [open, setOpen] =
    useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          setOpen(!open)
        }
      >
        <Text>
          Retrieved Sources
        </Text>
      </TouchableOpacity>

      <Collapsible
        collapsed={!open}
      >
        {sources.map(
          (
            source,
            index
          ) => (
            <View
              key={index}
            >
              <Text>
                {
                  source.question
                }
              </Text>

              <Text>
                Similarity:
                {" "}
                {source.similarity.toFixed(
                  3
                )}
              </Text>
            </View>
          )
        )}
      </Collapsible>
    </View>
  );
}