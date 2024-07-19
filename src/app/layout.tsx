import type { Metadata } from "next";

import { FC, PropsWithChildren, ReactElement } from "react";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

type T = PropsWithChildren;

const RootLayout: FC<T> = (props): ReactElement => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
};

export default RootLayout;
