import openai from "./chatgpt";
import { ChatInput } from "../components/ChatInput";

const query = async (prompt: string, ChatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      presence_penalty: 0,
      frequency_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to answer your question. (Error: ${err.message})`
    );

  return res;
};

export default query;
