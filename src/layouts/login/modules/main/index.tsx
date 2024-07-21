"use client";

import { FC, FormEvent, ReactElement, useEffect } from "react";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { ExampleA } from "@/src/components/interfaces/example/A";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/user");
    }
  }, [session, router]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await signIn("credentials", {
      password: formData.get("password"),
      username: formData.get("username"),
    });
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <label className="flex flex-col gap-1">
          Username
          <input className="rounded-md border p-2" name="username" required type="text" />
        </label>
        <label className="flex flex-col gap-1">
          Password
          <input className="rounded-md border p-2" name="password" required type="password" />
        </label>
        <ExampleA color="rose" size="sm" type="submit" variant="solid">
          Login
        </ExampleA>
      </form>
    </main>
  );
};
