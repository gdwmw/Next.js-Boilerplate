"use client";

import { FC, ReactElement } from "react";

import { signOut } from "next-auth/react";

import { ExampleA } from "@/src/components/interfaces/example/A";

export const Logout: FC = (): ReactElement => (
  <ExampleA color="rose" onClick={() => signOut()} size="sm" variant="solid">
    Logout
  </ExampleA>
);
