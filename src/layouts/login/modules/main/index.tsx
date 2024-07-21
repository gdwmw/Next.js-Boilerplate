"use client";

import { FC, FormEvent, ReactElement, useEffect } from "react";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
    <main>
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input name="username" required type="text" />
        </label>
        <label>
          Password
          <input name="password" required type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};
