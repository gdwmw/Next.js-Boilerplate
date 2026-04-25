"use client";

import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren, ReactElement } from "react";

type T = Readonly<PropsWithChildren>;

export const NextAuthProvider: FC<T> = (props): ReactElement => <SessionProvider>{props.children}</SessionProvider>;
