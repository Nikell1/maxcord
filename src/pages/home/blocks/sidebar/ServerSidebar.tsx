import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { useServersStore } from "@/store/servers/servers";
import { Separator } from "@radix-ui/react-separator";
import { UserRoundPlus, ChevronDown, Users, Volume2 } from "lucide-react";
import { Link } from "react-router";

export default function ServerSidebar() {
  const { currentServer, currentServerId, currentChannelId } =
    useServersStore();

  const textChannels = currentServer?.channels.filter(
    (channel) => channel.type === "TEXT"
  );

  const voiceChannels = currentServer?.channels.filter(
    (channel) => channel.type === "VOICE"
  );

  return (
    <>
      <div className="shrink-0 w-full h-15 flex py-3 px-4 border-b justify-between">
        <div className="flex my-auto">
          <span className="font-medium mr-1">{currentServer?.name}</span>
          <ChevronDown size={20} className="cursor-pointer mt-1" />
        </div>
        <UserRoundPlus className="my-auto cursor-pointer" />
      </div>
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <div className="px-3 pt-5 flex flex-col min-h-0">
          <div className="shrink-0 flex flex-row px-2 cursor-pointer">
            <Users className=" mr-4 text-custom-accent-gray" />
            <span className="text-custom-accent-gray font-medium">
              Участники
            </span>
          </div>

          <Separator className="shrink-0 w-full border-t mt-5 mb-3" />
          <div className="flex flex-row">
            <span className="text-[0.9rem] text-custom-accent-gray my-auto">
              Текстовые каналы
            </span>
            <ChevronDown
              className="ml-1 mt-1 cursor-pointer text-custom-accent-gray"
              size={14}
            />
          </div>
          <div>
            {textChannels?.map((channel) => (
              <Link
                key={channel.id}
                to={ROUTES.SERVER + currentServerId + "/" + channel.id}
                className={cn(
                  currentChannelId === channel.id
                    ? "bg-accent text-white"
                    : "text-custom-accent-gray",
                  "rounded-sm pl-1 font-medium flex flex-row cursor-pointer my-1"
                )}
              >
                <span
                  className={cn(
                    currentChannelId === channel.id
                      ? "text-white"
                      : "text-custom-accent-gray",
                    "mr-2 text-2xl"
                  )}
                >
                  #
                </span>
                <span className="my-auto">{channel.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-row my-2">
            <span className="text-[0.9rem] text-custom-accent-gray my-auto">
              Голосовые каналы
            </span>
            <ChevronDown
              className="ml-1 mt-1 cursor-pointer text-custom-accent-gray"
              size={14}
            />
          </div>
          <div>
            {voiceChannels?.map((channel) => (
              <Link
                key={channel.id}
                to={ROUTES.SERVER + currentServerId + "/" + channel.id}
                className={cn(
                  currentChannelId === channel.id
                    ? "bg-accent text-white"
                    : "text-custom-accent-gray",
                  "rounded-sm pl-1 py-1 my-auto font-medium flex flex-row mb-1 cursor-pointer"
                )}
              >
                <Volume2
                  size={20}
                  className={cn(
                    currentChannelId === channel.id
                      ? "text-white"
                      : "text-custom-accent-gray",
                    "mr-2 my-auto"
                  )}
                />
                <span>{channel.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
