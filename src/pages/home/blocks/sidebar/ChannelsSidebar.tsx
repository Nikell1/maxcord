import { Separator } from "@radix-ui/react-separator";
import LogoIcon from "@/components/LogoIcon";
import { CirclePlus, Compass } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";
import { useServersStore } from "@/store/servers/servers";

export default function ChannelsSidebar() {
  const location = useLocation();
  const isDirect = location.pathname.includes(ROUTES.DIRECT);
  const { servers, currentServerId } = useServersStore();

  return (
    <div className="h-full w-25 pt-3 flex flex-col overflow-y-auto no-scrollbar">
      <div className="mx-auto flex flex-col">
        <Link
          to={ROUTES.DIRECT + "0"}
          className={cn(
            isDirect ? "channelActive bg-custom-accent" : "bg-accent",
            "p-2 size-12 rounded-xl cursor-pointer relative"
          )}
        >
          <LogoIcon className="text-white size-full" />
        </Link>

        <Separator className="border-t my-2" />

        {servers.map((server) => (
          <Link
            to={ROUTES.SERVER + server.id + "/" + server.channels[0].id}
            key={server.id}
            className={cn(
              currentServerId == server.id && !isDirect && "channelActive",
              "bg-accent cursor-pointer size-12 rounded-xl mb-4 relative text-3xl p-1"
            )}
          >
            {server.icon}
          </Link>
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
