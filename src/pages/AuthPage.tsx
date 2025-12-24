import { useState } from "react";
import AuthForm from "@/components/AuthForm";
import SignupForm from "@/components/SignupForm";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {!isSignup ? (
          <AuthForm regOnclick={() => setIsSignup(true)} />
        ) : (
          <SignupForm authOnclick={() => setIsSignup(false)} />
        )}
      </div>
    </div>
  );
}
