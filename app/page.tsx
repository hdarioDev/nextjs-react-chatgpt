import { ItemDash } from "@/components/ItemDash";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <ItemDash title="Examples" icon={<SunIcon className="h-8 w-8" />} />
        <ItemDash
          title="Capabilities"
          icon={<BoltIcon className="h-8 w-8" />}
        />
        <ItemDash
          title="Limitations"
          icon={<ExclamationTriangleIcon className="h-8 w-8" />}
        />
      </div>
    </div>
  );
};

export default page;
