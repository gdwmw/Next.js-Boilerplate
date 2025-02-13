import Link from "next/link";
import { FC, ReactElement } from "react";

import { ExampleATWM } from "@/src/components/interfaces/example/A";
import { Logout } from "@/src/components/logout";
import { getSession } from "@/src/hooks/session";

export const Main: FC = async (): Promise<ReactElement> => {
  const session = await getSession("status");

  return (
    <main className="bg-slate-100">
      <section className="flex h-screen items-center justify-center p-5">
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 shadow-lg">
          <header>
            <h1 className="text-2xl font-semibold">
              This is <span className="text-rose-400">Home</span> page
            </h1>
          </header>
          <nav className="flex gap-3">
            <Link className={ExampleATWM({ color: "rose", size: "sm", variant: "solid" })} href={"/user-example"}>
              User
            </Link>
            <Link className={ExampleATWM({ color: "rose", size: "sm", variant: "solid" })} href={"/admin-example"}>
              Admin
            </Link>
            {session && <Logout />}
          </nav>
        </div>
      </section>
    </main>
  );
};
