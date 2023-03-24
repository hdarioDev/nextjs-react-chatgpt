import { SunIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  icon: React.ReactElement;
  title: string;
}

export const ItemDash = ({ icon, title }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-5">
        {icon}
        <h2>{title}</h2>
      </div>
      <div className="space-y-2">
        <p className="infoText">`&quot;`Explain Something to me`&quot;`</p>
        <p className="infoText">
          `&quot;`What is the difference between a dog and a cat?`&quot;`
        </p>
        <p className="infoText">
          `&quot;`What is the color of the sun?`&quot;`
        </p>
      </div>
    </div>
  );
};
