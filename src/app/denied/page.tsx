import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Denied",
};

const DeniedPage: FC = (): ReactElement => (
  <main className="flex h-screen flex-col items-center justify-center">
    <p className="text-2xl font-semibold">You are not allowed to access this page.</p>
  </main>
);

export default DeniedPage;
