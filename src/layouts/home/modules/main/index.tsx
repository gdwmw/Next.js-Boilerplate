import { FC, ReactElement } from "react";

import Link from "next/link";

import { ExampleATWM } from "@/src/components/interfaces/example/A";
import { Logout } from "@/src/components/logout";
import { getSession } from "@/src/hooks/session";

export const Main: FC = async (): Promise<ReactElement> => {
  const session = await getSession("status");

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
        {session && <Logout />}
      </div>
    </main>
  );
};
