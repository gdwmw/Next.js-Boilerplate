import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Not Found",
};

const NotFoundPage: FC = (): ReactElement => (
  <main className="flex h-screen flex-col items-center justify-center">
    <p className="text-2xl font-semibold">The page you are looking for does not exist.</p>
  </main>
);

export default NotFoundPage;
