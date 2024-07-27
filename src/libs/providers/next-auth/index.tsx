"use client";

import { FC, PropsWithChildren, ReactElement } from "react";

import { SessionProvider } from "next-auth/react";

type T = Readonly<PropsWithChildren>;

export const NextAuthProvider: FC<T> = (props): ReactElement => <SessionProvider>{props.children}</SessionProvider>;
