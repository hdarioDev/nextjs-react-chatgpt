"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

export const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div className="">
          <NewChat />
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
