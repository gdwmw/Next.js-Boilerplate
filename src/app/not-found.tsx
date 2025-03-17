import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Not Found",
};

const NotFoundPage: FC = (): ReactElement => (
  <main className="flex h-screen flex-col items-center justify-center">
    <h1 className="text-2xl font-semibold">The page you are looking for does not exist.</h1>
  </main>
);

export default NotFoundPage;
