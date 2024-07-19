"use client";

import { FC, PropsWithChildren, ReactElement } from "react";

import { ThemeProvider } from "next-themes";

type T = Readonly<PropsWithChildren>;

export const NextThemesProvider: FC<T> = (props): ReactElement => {
  return (
    <ThemeProvider enableColorScheme={false} enableSystem>
      {props.children}
    </ThemeProvider>
  );
};
