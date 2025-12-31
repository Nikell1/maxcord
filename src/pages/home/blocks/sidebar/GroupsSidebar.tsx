import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router";

export default function GroupsSidebar() {
  return (
    <>
      <div className="shrink-0 w-full h-15 flex p-3 border-b">
        <Button
          variant={"secondary"}
          className="bg-custom-accent-secondary border w-full cursor-pointer hover:bg-custom-accent-secondary/80"
        >
          Найти или начать беседу
        </Button>
      </div>
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <div className="px-3 pt-5 flex flex-col min-h-0">
          <div className="shrink-0 flex flex-row px-2 cursor-pointer">
            <Users className=" mr-4 text-custom-accent-gray" />
            <span className="text-custom-accent-gray font-medium">Друзья</span>
          </div>

          <Separator className="shrink-0 w-full border-t mt-5 mb-3" />

          <div className="shrink-0 px-2 flex flex-row justify-between mb-3">
            <span className="text-[0.9rem] text-custom-accent-gray my-auto">
              Личные сообщения
            </span>
            <span className="cursor-pointer text-2xl text-balance text-custom-accent-gray font-semibold">
              +
            </span>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar min-h-0">
            <div className="flex flex-col">
              {Array.from({ length: 20 }).map((_, i) => (
                <Link to={"/"} key={i} className="flex flex-row w-full mb-3">
                  <div className="bg-accent rounded-full size-10 mr-4 shrink-0"></div>
                  <span className="my-auto text-custom-accent-gray truncate">
                    Mukcep
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
