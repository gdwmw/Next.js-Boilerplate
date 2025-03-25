"use client";

import { signOut } from "next-auth/react";
import { FC, ReactElement } from "react";

import { ExampleA, IExampleA } from "../..";

export const LogoutButton: FC<IExampleA> = ({ ...props }): ReactElement => (
  <ExampleA onClick={() => signOut()} {...props}>
    Logout
  </ExampleA>
);
