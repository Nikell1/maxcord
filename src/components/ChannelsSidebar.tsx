import { Separator } from "@radix-ui/react-separator";
import LogoIcon from "./LogoIcon";

export default function ChannelsSidebar() {
  return (
    <div className="h-full w-20 px-4 pt-3 flex flex-col">
      <div className=" p-2 bg-custom-accent size-12 rounded-xl">
        <LogoIcon className="text-white size-full" />
      </div>
      <Separator className="border-t my-2" />
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
    </div>
  );
}
