import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "No prompt provided" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "No chatId provided" });
    return;
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://prochatgpt.com/wp-content/uploads/2023/03/cropped-ChatGPT_logo-2.jpg",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  // Send response
  res.status(200).json({ answer: message.text });
}
