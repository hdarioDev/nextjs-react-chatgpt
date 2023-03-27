import { DocumentData } from "firebase/firestore";
import React from "react";

type Props = {
  id: string;
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  console.log(message);

  const isChatGPT = message.user._id === "ChatGPT";

  return (
    <div className={`py-5 text-white  ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10  max-w-4xl">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
