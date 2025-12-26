import { Separator } from "@radix-ui/react-separator";
import { UserRoundPlus, ChevronDown, Users } from "lucide-react";

export default function ServerSidebar() {
  return (
    <>
      <div className="shrink-0 w-full h-15 flex py-3 px-4 border-b justify-between">
        <div className="flex my-auto">
          <span className="font-medium mr-1">Название сервера</span>
          <ChevronDown size={20} className="cursor-pointer" />
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
        </div>
      </div>
    </>
  );
}
