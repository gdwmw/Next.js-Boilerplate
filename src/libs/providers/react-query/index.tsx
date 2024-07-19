"use client";

import { FC, PropsWithChildren, ReactElement } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type T = Readonly<PropsWithChildren>;

export const ReactQueryProvider: FC<T> = (props): ReactElement => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
