"use client";

import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { ChatRow } from "./ChatRow";

export const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  console.log("chats", chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div className="">
          <NewChat />
          <div>
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div className="flex flex-col items-center justify-center">
          <img
            onClick={() => signOut()}
            src={session.user?.image!}
            alt="avatar"
            className="rounded-full h-12 w-12 cursor-pointer hover:opacity-50"
          />
          <p className="text-white">{session.user?.name}</p>
        </div>
      )}
    </div>
  );
};
