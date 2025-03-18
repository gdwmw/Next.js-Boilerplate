import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Denied",
};

const DeniedPage: FC = (): ReactElement => (
  <main className="flex h-svh flex-col items-center justify-center px-5 dark:bg-black dark:text-white">
    <h1 className="text-center text-2xl font-semibold">You are not allowed to access this page.</h1>
  </main>
);

export default DeniedPage;
