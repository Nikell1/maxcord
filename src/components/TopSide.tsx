import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TopSide() {
  return (
    <div className="w-screen h-10 py-2 px-4 flex flex-row">
      <div className="flex-row flex mb-4">
        <ArrowLeft className="cursor-pointer" size={25} />
        <ArrowRight
          className="text-custom-secondary ml-2 cursor-pointer"
          size={25}
        />
      </div>
      <div className="w-full flex flex-row justify-center">
        <p className="font-medium text-sm">Названия</p>
      </div>
    </div>
  );
}
