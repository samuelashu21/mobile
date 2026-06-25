import React, {
  useState,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import * as Speech from "expo-speech";

interface Source {
  question: string;
  answer: string;
  similarity: number;
}

interface Props {
  role: "user" | "assistant";

  content: string;

  confidence?: number;

  responseTime?: number;

  cached?: boolean;

  sources?: Source[];
}

export default function ChatBubble({
  role,
  content,
  confidence,
  responseTime,
  cached,
  sources,
}: Props) {
  const [showSources, setShowSources] =
    useState(false);

  const speak = () => {
    Speech.speak(content);
  };

  const isUser =
    role === "user";

  return (
    <View
      style={[
        styles.wrapper,

        isUser
          ? styles.userWrapper
          : styles.assistantWrapper,
      ]}
    >
      <View
        style={[
          styles.bubble,

          isUser
            ? styles.userBubble
            : styles.assistantBubble,
        ]}
      >
        <Text
          style={[
            styles.message,
            isUser &&
              styles.userText,
          ]}
        >
          {content}
        </Text>

        {!isUser && (
          <>
            {cached && (
              <View
                style={
                  styles.cachedBadge
                }
              >
                <Text
                  style={
                    styles.cachedText
                  }
                >
                  ⚡ Cached
                </Text>
              </View>
            )}

            {confidence !==
              undefined && (
              <Text
                style={
                  styles.meta
                }
              >
                Confidence:{" "}
                {(
                  confidence *
                  100
                ).toFixed(1)}
                %
              </Text>
            )}

            {responseTime !==
              undefined && (
              <Text
                style={
                  styles.meta
                }
              >
                Response Time:{" "}
                {
                  responseTime
                }
                s
              </Text>
            )}

            <TouchableOpacity
              onPress={speak}
              style={
                styles.actionButton
              }
            >
              <Text>
                🔊 Listen
              </Text>
            </TouchableOpacity>

            {sources &&
              sources.length >
                0 && (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      setShowSources(
                        !showSources
                      )
                    }
                    style={
                      styles.actionButton
                    }
                  >
                    <Text>
                      📚 Sources (
                      {
                        sources.length
                      }
                      )
                    </Text>
                  </TouchableOpacity>

                  {showSources &&
                    sources.map(
                      (
                        source,
                        index
                      ) => (
                        <View
                          key={
                            index
                          }
                          style={
                            styles.sourceCard
                          }
                        >
                          <Text
                            style={
                              styles.sourceTitle
                            }
                          >
                            Question
                          </Text>

                          <Text>
                            {
                              source.question
                            }
                          </Text>

                          <Text
                            style={
                              styles.sourceTitle
                            }
                          >
                            Answer
                          </Text>

                          <Text>
                            {
                              source.answer
                            }
                          </Text>

                          <Text
                            style={
                              styles.similarity
                            }
                          >
                            Similarity:{" "}
                            {source.similarity.toFixed(
                              3
                            )}
                          </Text>
                        </View>
                      )
                    )}
                </>
              )}
          </>
        )}
      </View>
    </View>
  );
}

const styles =
  StyleSheet.create({
    wrapper: {
      marginVertical: 6,
    },

    userWrapper: {
      alignItems:
        "flex-end",
    },

    assistantWrapper: {
      alignItems:
        "flex-start",
    },

    bubble: {
      maxWidth: "90%",
      padding: 12,
      borderRadius: 16,
    },

    userBubble: {
      backgroundColor:
        "#2563EB",
    },

    assistantBubble: {
      backgroundColor:
        "#FFFFFF",

      borderWidth: 1,

      borderColor:
        "#E5E7EB",
    },

    message: {
      fontSize: 16,
      color: "#111827",
    },

    userText: {
      color: "#FFFFFF",
    },

    meta: {
      marginTop: 8,
      fontSize: 12,
      color: "#6B7280",
    },

    cachedBadge: {
      backgroundColor:
        "#DCFCE7",

      alignSelf:
        "flex-start",

      paddingHorizontal: 8,

      paddingVertical: 4,

      borderRadius: 12,

      marginTop: 10,
    },

    cachedText: {
      color: "#166534",
      fontSize: 12,
      fontWeight: "600",
    },

    actionButton: {
      marginTop: 10,
    },

    sourceCard: {
      marginTop: 10,

      padding: 10,

      borderRadius: 10,

      backgroundColor:
        "#F9FAFB",
    },

    sourceTitle: {
      fontWeight: "700",
      marginTop: 6,
    },

    similarity: {
      marginTop: 6,
      color: "#059669",
      fontWeight: "600",
    },
  });