"use client";

import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const bottomRef = useRef<any>(null);

  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl text-white mb-2 font-semibold">
            No messages yet
          </h1>
          <p className="text-gray-500">Send a message to start a chat</p>
        </div>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} id={message.id} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Chat;
