import { useServersStore } from "@/store/servers/servers";
import { Separator } from "@radix-ui/react-separator";
import { UserRoundPlus, ChevronDown, Users, Volume2 } from "lucide-react";
import { Link } from "react-router";

export default function ServerSidebar() {
  const { currentServer } = useServersStore();

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
            <div className="flex flex-row mb-3 cursor-pointer">
              <span className="text-custom-accent-gray mr-2 text-2xl">#</span>
              <Link
                to={"/"}
                className="text-custom-accent-gray my-auto h-full font-medium"
              >
                основной
              </Link>
            </div>
          </div>
          <div className="flex flex-row mb-2">
            <span className="text-[0.9rem] text-custom-accent-gray my-auto">
              Голосовые каналы
            </span>
            <ChevronDown
              className="ml-1 mt-1 cursor-pointer text-custom-accent-gray"
              size={14}
            />
          </div>
          <div>
            <div className="flex flex-row mb-3 cursor-pointer">
              <Volume2
                size={20}
                className="mr-2 text-custom-accent-gray my-auto"
              />
              <Link
                to={"/"}
                className="text-custom-accent-gray my-auto h-full font-medium"
              >
                основной
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
