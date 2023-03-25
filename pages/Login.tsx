"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  return (
    <div className="bg-[#74aa9d] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://prochatgpt.com/wp-content/uploads/2023/03/cropped-ChatGPT_logo-2.jpg"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};
