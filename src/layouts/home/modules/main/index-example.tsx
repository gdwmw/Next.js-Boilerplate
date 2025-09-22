import Link from "next/link";
import { FC, ReactElement } from "react";
import { FaUserAlt } from "react-icons/fa";

import { ChangeThemeButton, ExampleATWM, FormContainer, LogoutButton } from "@/src/components";
import { getCookie, getSession } from "@/src/utils";

export const Main: FC = async (): Promise<ReactElement> => {
  const session = await getSession("status");
  const themeCookie = await getCookie("theme");

  return (
    <main>
      <FormContainer className={{ innerContainer: "flex-col items-center gap-3" }} href="" label="">
        <header>
          <h1 className="text-center text-2xl font-semibold">
            This is <span className="text-blue-500">Home</span> page
          </h1>
        </header>

        <nav className={`w-full ${session ? "space-y-3" : "flex gap-3"}`}>
          {session ? (
            <div className="flex flex-wrap justify-center gap-3">
              <ChangeThemeButton className="min-w-16" color="green" cookie={themeCookie?.value ?? ""} size="sm" variant="outline" />

              <Link className={ExampleATWM({ className: "min-w-16", color: "blue", size: "sm", variant: "solid" })} href={"/profile"}>
                <FaUserAlt size={17} />
              </Link>

              <LogoutButton className="min-w-16" color="red" size="sm" variant="solid" />
            </div>
          ) : (
            <ChangeThemeButton className="min-w-10" color="green" cookie={themeCookie?.value ?? ""} size="sm" variant="outline" />
          )}

          {session ? (
            <div className="flex flex-wrap gap-3">
              <Link className={ExampleATWM({ className: "grow", color: "blue", size: "sm", variant: "solid" })} href={"/user-example"}>
                USER
              </Link>

              <Link className={ExampleATWM({ className: "grow", color: "blue", size: "sm", variant: "solid" })} href={"/admin-example"}>
                ADMIN
              </Link>
            </div>
          ) : (
            <Link className={ExampleATWM({ className: "w-full", color: "blue", size: "sm", variant: "solid" })} href={"/authentication/login"}>
              LOGIN
            </Link>
          )}
        </nav>
      </FormContainer>
    </main>
  );
};
