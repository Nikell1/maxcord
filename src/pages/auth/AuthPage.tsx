import { Outlet } from "react-router";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";

export default function AuthPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <StarsBackground
        starColor={"#FFF"}
        className={cn(
          "absolute inset-0 flex items-center justify-center rounded-xl",
          "bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)] rounded-none"
        )}
      />
      <div className="w-full max-w-sm relative z-1">
        <Outlet />
      </div>
    </div>
  );
}
