import { Separator } from "@radix-ui/react-separator";
import LogoIcon from "../LogoIcon";
import { CirclePlus, Compass } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { Link, useLocation } from "react-router";

export default function ChannelsSidebar() {
  const location = useLocation();
  const isMeRoute = location.pathname.includes(ROUTES.ME);
  const activeServerId = location.pathname.split("/")[2];

  return (
    <div className="h-full w-25 pt-3 flex flex-col overflow-y-auto no-scrollbar">
      <div className="mx-auto flex flex-col">
        <Link
          to={ROUTES.ME}
          className={`${
            isMeRoute ? "channelActive bg-custom-accent" : "bg-accent"
          } p-2 size-12 rounded-xl cursor-pointer relative`}
        >
          <LogoIcon className="text-white size-full" />
        </Link>
        <Separator className="border-t my-2" />
        {Array.from({ length: 20 }).map((_, i) => (
          <Link
            to={i.toString()}
            key={i}
            className={`${
              activeServerId === i.toString() && "channelActive"
            } bg-accent cursor-pointer size-12 rounded-xl mb-4 relative`}
          ></Link>
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
