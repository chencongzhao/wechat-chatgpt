import * as dotenv from "dotenv";
dotenv.config();
import { IConfig } from "./interface";

export const config: IConfig = {
  api: process.env.API,
  openai_api_key: process.env.OPENAI_API_KEY || "123456789",
  model: process.env.MODEL || "gpt-3.5-turbo",
  chatPrivateTriggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || "@猫猫",
  chatTriggerRule: process.env.CHAT_TRIGGER_RULE || "@猫猫",
  disableGroupMessage: process.env.DISABLE_GROUP_MESSAGE === "false",
  temperature: process.env.TEMPERATURE ? parseFloat(process.env.TEMPERATURE) : 1.3,
  blockWords: process.env.BLOCK_WORDS?.split(",") || ["AI","人工智能","chatgpt","openai","规范","抱歉","我不能"],
  chatgptBlockWords: process.env.CHATGPT_BLOCK_WORDS?.split(",") || ["AI","人工智能","chatgpt","openai","规范","抱歉","我不能"],
};
