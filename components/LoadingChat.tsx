import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  title: string;
};

export const LoadingChat = ({ title }: Props) => {
  return (
    <div className="border-gray-700 bg-[#353641] border chatRow w-44 absolute bottom-20 ">
      <ArrowPathIcon className="h-4 w-4" />
      <p>{title}</p>
    </div>
  );
};
