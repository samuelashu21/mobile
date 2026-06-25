import React from "react";

import { Button } from "react-native";

import { exportChatPDF } from "../utils/exportPdf";

interface Props {
  messages: any[];
}

export default function DownloadChatButton({
  messages,
}: Props) {
  return (
    <Button
      title="Export PDF"
      onPress={() =>
        exportChatPDF(messages)
      }
    />
  );
}