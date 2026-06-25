import React, {
  useState,
} from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import { explainService }
from "../services/explain.service";

export default function ExplainScreen() {
  const [question, setQuestion] =
    useState("");

  const [data, setData] =
    useState<any>(null);

  const handleExplain =
    async () => {
      const result =
        await explainService.explain({
          question,
        });

      setData(result);
    };

  return (
    <ScrollView
      style={{
        padding: 20,
      }}
    >
      <TextInput
        value={question}
        onChangeText={
          setQuestion
        }
        placeholder="Medical Question"
      />

      <Button
        title="Explain"
        onPress={
          handleExplain
        }
      />

      {data && (
        <>
          <Text>
            Reasoning
          </Text>

          <Text>
            {data.reasoning}
          </Text>

          {data.retrieved_examples.map(
            (
              item: any,
              index: number
            ) => (
              <View
                key={index}
              >
                <Text>
                  {
                    item.question
                  }
                </Text>

                <Text>
                  {
                    item.answer
                  }
                </Text>

                <Text>
                  {
                    item.similarity
                  }
                </Text>
              </View>
            )
          )}
        </>
      )}
    </ScrollView>
  );
}