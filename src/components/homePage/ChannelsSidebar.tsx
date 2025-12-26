import { Separator } from "@radix-ui/react-separator";
import LogoIcon from "./LogoIcon";
import { CirclePlus, Compass } from "lucide-react";

export default function ChannelsSidebar() {
  return (
    <div className="h-full w-25 pt-3 flex flex-col overflow-y-auto no-scrollbar">
      <div className="mx-auto">
        <div className=" p-2 bg-custom-accent size-12 rounded-xl">
          <LogoIcon className="text-white size-full" />
        </div>
        <Separator className="border-t my-2" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bg-accent size-12 rounded-xl mb-4"></div>
        ))}
        <div className="bg-accent size-12 rounded-xl mb-4 p-2.5">
          <CirclePlus className="size-full" />
        </div>
        <div className="bg-accent size-12 rounded-xl mb-4 p-2.5">
          <Compass className="size-full" />
        </div>
      </div>
    </div>
  );
}
