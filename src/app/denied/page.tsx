import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Denied",
};

const DeniedPage: FC = (): ReactElement => {
  return <p>You are not allowed to access this page.</p>;
};

export default DeniedPage;
