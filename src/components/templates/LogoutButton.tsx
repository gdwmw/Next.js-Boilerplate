"use client";

import { Power } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { FC, ReactElement } from "react";

import { POSTLogout } from "@/src/utils";

import { ExampleA, IExampleA } from "..";

export const LogoutButton: FC<IExampleA> = ({ ...props }): ReactElement => {
  const session = useSession();

  const handleLogout = async () => {
    if (session.data?.user?.refreshToken !== "ADmiNrEfReSHTOkeN" && session.data?.user?.refreshToken !== "uSErrEfReSHTOkeN") {
      await POSTLogout({ refreshToken: session.data?.user?.refreshToken || "" });
    }
    signOut();
  };

  return (
    <ExampleA onClick={handleLogout} {...props}>
      <Power size={18} />
    </ExampleA>
  );
};
