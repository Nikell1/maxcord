import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { Button } from "@/components/ui/button";
import { useServersStore } from "@/store/servers/servers";
import { Volume2 } from "lucide-react";

export default function VoiceChat() {
  const { currentChannel } = useServersStore();

  return (
    <div className="h-full w-full border-t border-l relative">
      <BubbleBackground className="w-full h-full opacity-70 absolute z-0" />
      <div className="w-full h-full z-1 relative flex flex-col">
        <div className="w-full h-15.25 px-3 flex flex-row justify-between">
          <div className="flex">
            <Volume2 size={24} className="mr-2 my-auto" />
            <span className="my-auto text-xl">{currentChannel?.name}</span>
          </div>
        </div>
        <div className="flex m-auto flex-col">
          <h2 className="text-3xl font-bold text-center">
            {currentChannel?.name}
          </h2>
          <p className="mt-3 mb-5 text-sm text-center">
            Сейчас в голосовом чате никого нет
          </p>
          <Button
            variant={"outline"}
            className="bg-white text-black hover:bg-white/80 hover:text-black cursor-pointer"
          >
            Присоединиться к голосовому каналу
          </Button>
        </div>
      </div>
    </div>
  );
}
