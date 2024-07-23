"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, ReactElement, useState } from "react";

type T = Readonly<PropsWithChildren>;

export const ReactQueryProvider: FC<T> = (props): ReactElement => {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
