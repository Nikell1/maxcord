import { Mic, Headphones, Settings } from "lucide-react";

export default function UserInfoSidebar() {
  return (
    <div className="absolute bottom-0 left-3.5 w-[20%] bg-accent rounded-t-xl px-3 py-4 flex flex-row justify-between">
      <div className="flex flex-row">
        <div className="bg-custom-accent-secondary rounded-full size-10 my-auto"></div>
        <div className="flex flex-col ml-2">
          <span>Nikell</span>
          <span className="text-xs text-custom-accent-gray">В сети</span>
        </div>
      </div>
      <div className="flex flex-row justify-between w-27 my-auto mr-2">
        <Mic className="text-custom-accent-gray cursor-pointer" />
        <Headphones className="text-custom-accent-gray cursor-pointer" />
        <Settings className="text-custom-accent-gray cursor-pointer" />
      </div>
    </div>
  );
}
