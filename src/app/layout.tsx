import type { Metadata } from "next";

import { FC, PropsWithChildren, ReactElement } from "react";

import { APIConnectionChecker } from "../components";
import { NextAuthProvider, NextThemesProvider, ReactQueryProvider } from "../libs";
import { geistMono, geistSans, inter, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  authors: [{ name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" }],
  category: "Boilerplate",
  creator: "Gede Dewo Wahyu M.W",
  publisher: "Gede Dewo Wahyu M.W",
  referrer: "strict-origin-when-cross-origin",
  title: {
    default: "Next.js | Home",
    template: "Next.js | %s",
  },
};

type T = Readonly<PropsWithChildren>;

const RootLayout: FC<T> = (props): ReactElement => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} bg-gray-100 font-inter antialiased dark:bg-gray-900`}
    >
      <NextThemesProvider>
        <ReactQueryProvider>
          <NextAuthProvider>
            {props.children}
            {(process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_EXAMPLE_MODE === "true") && <APIConnectionChecker />}
          </NextAuthProvider>
        </ReactQueryProvider>
      </NextThemesProvider>
    </body>
  </html>
);

export default RootLayout;
