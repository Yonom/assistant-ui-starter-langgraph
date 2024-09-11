"use client";

import { Thread } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";

const MarkdownText = makeMarkdownText();

export default function Home() {
  return (
    <main className="h-full">
      <Thread assistantMessage={{ components: { Text: MarkdownText } }} />
    </main>
  );
}
