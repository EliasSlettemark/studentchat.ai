import { Agent } from "@mastra/core/agent";
import { createiMessageAdapter } from "@photon-ai/chat-adapter-imessage";

export const imessageAgent = new Agent({
  id: "imessage-agent",
  name: "iMessage Agent",
  instructions: "Answer questions and help with tasks over iMessage.",
  model: "openai/gpt-4.1",
  channels: {
    adapters: {
      imessage: {
        adapter: createiMessageAdapter(),
        toolDisplay: "text",
      },
    },
    threadContext: { maxMessages: 0 },
  },
});