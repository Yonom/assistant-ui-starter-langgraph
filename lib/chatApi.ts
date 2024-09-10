import { Client } from "@langchain/langgraph-sdk";
import { LangChainMessage } from "@assistant-ui/react-langgraph";

const createClient = () => {
  const apiUrl =
    process.env["NEXT_PUBLIC_LANGGRAPH_API_URL"] ||
    "https://localhost:8123/api";
  return new Client({
    apiUrl,
  });
};

export const createThread = async () => {
  const client = createClient();
  return client.threads.create();
};

export const sendMessage = async (params: {
  threadId: string;
  message: LangChainMessage;
}) => {
  const client = createClient();
  return client.runs.stream(
    params.threadId,
    process.env["NEXT_PUBLIC_LANGGRAPH_GRAPH_ID"]!,
    {
      input: {
        messages: [params.message],
      },
      streamMode: "messages",
    }
  );
};
