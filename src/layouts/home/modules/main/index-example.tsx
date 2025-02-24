import Link from "next/link";
import { FC, ReactElement } from "react";

import { ExampleATWM, FormContainer, Logout } from "@/src/components";
import { getSession } from "@/src/hooks";

export const Main: FC = async (): Promise<ReactElement> => {
  const session = await getSession("status");

  return (
    <main className="bg-slate-100">
      <FormContainer innerContainerClassName="flex-col gap-3 items-center">
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
      </FormContainer>
    </main>
  );
};
