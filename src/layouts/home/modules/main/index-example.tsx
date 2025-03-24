import Link from "next/link";
import { FC, ReactElement } from "react";

import { ChangeThemeButton, ExampleATWM, FormContainer, Logout } from "@/src/components";
import { getCookie, getSession } from "@/src/hooks";

export const Main: FC = async (): Promise<ReactElement> => {
  const session = await getSession("status");
  const themeCookie = await getCookie("theme");

  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <FormContainer className={{ innerContainer: "flex-col items-center gap-3" }} href="" label="">
        <header>
          <h1 className="text-center text-2xl font-semibold">
            This is <span className="text-rose-400">Home</span> page
          </h1>
        </header>
        <nav className="flex flex-wrap justify-center gap-3">
          <ChangeThemeButton cookie={themeCookie?.value ?? ""} />
          <Link className={ExampleATWM({ color: "rose", size: "sm", variant: "solid" })} href={"/user-example"}>
            USER
          </Link>
          <Link className={ExampleATWM({ color: "rose", size: "sm", variant: "solid" })} href={"/admin-example"}>
            ADMIN
          </Link>
          {session && <Logout />}
        </nav>
      </FormContainer>
    </main>
  );
};
