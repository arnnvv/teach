"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "sonner";

interface LoginProps {}

const Login: FC<LoginProps> = ({}: LoginProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTokenSent, setIsTokenSent] = useState<boolean>(false);

  const authenticate = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
  };
  return (
    <form
      onSubmit={authenticate}
      className="flex flex-col gap-3 justify-center items-center h-screen max-w-lg mx-auto"
    >
      <label>Login with magic link 🧙🏽‍♂️</label>
      <input
        type="text"
        placeholder="Enter email address"
        className="border border-slate-200 w-full px-3 py-2 rounded-lg"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        value={email}
      />

      <button
        type="submit"
        className="px-3 py-2 bg-slate-900 text-white rounded-lg text-base w-full"
        disabled={isTokenSent || isLoading}
      >
        {isTokenSent
          ? "Token sent...please check your email address"
          : isLoading
            ? "One moment please..."
            : "Send magic link"}
      </button>
    </form>
  );
};

export default Login;
