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
      <FormContainer className={{ innerContainer: "max-w-[400px] flex-col items-center gap-3" }} href="" label="">
        <header>
          <h1 className="text-center text-2xl font-semibold text-blue-500">Home Page</h1>
          <p className="text-center text-sm tracking-wide">This is the home page of the application</p>
        </header>

        <nav className={`w-full ${session ? "space-y-3" : "flex gap-3"}`}>
          {session ? (
            <div className="flex flex-wrap justify-center gap-3">
              <ChangeThemeButton className="min-w-16" color="blue" cookie={themeCookie?.value ?? ""} size="sm" variant="outline" />

              <Link className={ExampleATWM({ className: "min-w-16", color: "black", size: "sm", variant: "solid" })} href={"/profile"}>
                <FaUserAlt size={17} />
              </Link>

              <LogoutButton className="min-w-16" color="gray" size="sm" variant="solid" />
            </div>
          ) : (
            <ChangeThemeButton className="min-w-10" color="blue" cookie={themeCookie?.value ?? ""} size="sm" variant="outline" />
          )}

          {session ? (
            <div className="flex flex-wrap gap-3">
              <Link className={ExampleATWM({ className: "grow", color: "black", size: "sm", variant: "solid" })} href={"/user-example"}>
                USER
              </Link>

              <Link className={ExampleATWM({ className: "grow", color: "gray", size: "sm", variant: "solid" })} href={"/admin-example"}>
                ADMIN
              </Link>
            </div>
          ) : (
            <Link className={ExampleATWM({ className: "w-full", color: "black", size: "sm", variant: "solid" })} href={"/authentication/login"}>
              LOGIN
            </Link>
          )}
        </nav>
      </FormContainer>
    </main>
  );
};
