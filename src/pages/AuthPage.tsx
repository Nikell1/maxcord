import { useState } from "react";
import AuthForm from "@/components/AuthForm";
import SignupForm from "@/components/SignupForm";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <StarsBackground
        starColor={"#FFF"}
        className={cn(
          "absolute inset-0 flex items-center justify-center rounded-xl",
          "bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)]"
        )}
      />
      <div className="w-full max-w-sm relative z-1">
        {!isSignup ? (
          <AuthForm regOnclick={() => setIsSignup(true)} />
        ) : (
          <SignupForm authOnclick={() => setIsSignup(false)} />
        )}
      </div>
    </div>
  );
}
