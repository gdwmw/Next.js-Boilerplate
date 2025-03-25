import Link from "next/link";
import { FC, ReactElement } from "react";

import { ChangeThemeButton, ExampleATWM, FormContainer, LogoutButton } from "@/src/components";
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

        <nav className="space-y-3">
          <div className="flex flex-wrap gap-3">
            <ChangeThemeButton className="min-w-16" color="rose" cookie={themeCookie?.value ?? ""} size="sm" variant="outline" />

            <Link className={ExampleATWM({ className: "grow", color: "rose", size: "sm", variant: "solid" })} href={"/user-example"}>
              User
            </Link>

            <Link className={ExampleATWM({ className: "grow", color: "rose", size: "sm", variant: "solid" })} href={"/admin-example"}>
              Admin
            </Link>
          </div>

          {session && (
            <div className="flex flex-wrap gap-3">
              <Link className={ExampleATWM({ className: "grow", color: "rose", size: "sm", variant: "solid" })} href={"/profile"}>
                Profile
              </Link>

              <LogoutButton className="grow" color="rose" size="sm" variant="solid" />
            </div>
          )}
        </nav>
      </FormContainer>
    </main>
  );
};
