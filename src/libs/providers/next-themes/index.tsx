"use client";

import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren, ReactElement } from "react";

type T = Readonly<PropsWithChildren>;

export const NextThemesProvider: FC<T> = (props): ReactElement => (
  <ThemeProvider enableColorScheme={false} enableSystem>
    {props.children}
  </ThemeProvider>
);
