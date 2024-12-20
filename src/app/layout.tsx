import type { Metadata } from "next";

import localFont from "next/font/local";
import { FC, PropsWithChildren, ReactElement } from "react";

import { NextAuthProvider, NextThemesProvider, ReactQueryProvider } from "@/src/libs/providers";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NextThemesProvider>
        <ReactQueryProvider>
          <NextAuthProvider>{props.children}</NextAuthProvider>
        </ReactQueryProvider>
      </NextThemesProvider>
    </body>
  </html>
);

export default RootLayout;
