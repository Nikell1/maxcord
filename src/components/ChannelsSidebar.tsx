import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ChannelsSidebar() {
  return (
    <div className="h-screen w-20 px-4 pt-3 flex flex-col">
      <div className="flex-row flex mb-4">
        <ArrowLeft className="cursor-pointer" size={25} />
        <ArrowRight
          className="text-custom-secondary ml-2 cursor-pointer"
          size={25}
        />
      </div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
      <div className="bg-accent size-12 rounded-xl mb-4"></div>
    </div>
  );
}
