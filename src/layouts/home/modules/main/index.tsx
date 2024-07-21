"use client";

import { FC, ReactElement } from "react";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { ExampleA, ExampleATWM } from "@/src/components/interfaces/example/A";

export const Main: FC = (): ReactElement => {
  const session = useSession();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3">
      <p className="text-2xl font-semibold">This is the home page.</p>
      <div className="flex gap-3">
        <Link className={ExampleATWM({ color: "rose", size: "sm", variant: "solid" })} href={"/user"}>
          User
        </Link>
        <Link className={ExampleATWM({ color: "rose", size: "sm", variant: "solid" })} href={"/admin"}>
          Admin
        </Link>
        {session.status === "authenticated" && (
          <ExampleA color="rose" onClick={() => signOut()} size="sm" variant="solid">
            Logout
          </ExampleA>
        )}
      </div>
    </main>
  );
};
