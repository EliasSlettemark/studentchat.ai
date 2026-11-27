import { Mastra } from "@mastra/core";
import { imessageAgent } from "./agents/imessage-agent.ts";

export const mastra = new Mastra({
  agents: { imessageAgent },
});