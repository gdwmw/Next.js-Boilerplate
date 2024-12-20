"use client";

import { signOut } from "next-auth/react";
import { FC, ReactElement } from "react";

import { ExampleA } from "@/src/components/interfaces/example/A";

export const Logout: FC = (): ReactElement => (
  <ExampleA color="rose" onClick={() => signOut()} size="sm" variant="solid">
    Logout
  </ExampleA>
);
