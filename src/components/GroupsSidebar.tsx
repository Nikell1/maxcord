import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { Users } from "lucide-react";

export default function GroupsSidebar() {
  return (
    <div className="h-full w-[22%] border-r flex flex-col">
      <div className="w-full p-3">
        <Button
          variant={"secondary"}
          className="bg-custom-accent-secondary border w-full cursor-pointer hover:bg-custom-accent-secondary/80"
        >
          Найти или начать беседу
        </Button>
      </div>
      <div className="border-t w-full h-full px-3 py-5">
        <div className="flex flex-row px-2 cursor-pointer">
          <Users className=" mr-4 text-custom-accent-gray" />
          <span className="text-custom-accent-gray font-medium">Друзья</span>
        </div>
        <Separator className="w-full border-t mt-5 mb-3" />
        <div className="px-2 flex flex-row justify-between">
          <span className="text-[0.9rem] text-custom-accent-gray my-auto">
            Личные сообщения
          </span>
          <span className="cursor-pointer text-2xl text-balance text-custom-accent-gray font-semibold">
            +
          </span>
        </div>
        <div className="flex flex-row w-full my-3">
          <div className="bg-accent rounded-full size-10 mr-4"></div>
          <span className="my-auto text-custom-accent-gray">Mukcep</span>
        </div>
        <div className="flex flex-row w-full my-3">
          <div className="bg-accent rounded-full size-10 mr-4"></div>
          <span className="my-auto text-custom-accent-gray">Mukcep</span>
        </div>
        <div className="flex flex-row w-full my-3">
          <div className="bg-accent rounded-full size-10 mr-4"></div>
          <span className="my-auto text-custom-accent-gray">Mukcep</span>
        </div>
        <div className="flex flex-row w-full my-3">
          <div className="bg-accent rounded-full size-10 mr-4"></div>
          <span className="my-auto text-custom-accent-gray">Mukcep</span>
        </div>
        <div className="flex flex-row w-full my-3">
          <div className="bg-accent rounded-full size-10 mr-4"></div>
          <span className="my-auto text-custom-accent-gray">Mukcep</span>
        </div>
      </div>
    </div>
  );
}
