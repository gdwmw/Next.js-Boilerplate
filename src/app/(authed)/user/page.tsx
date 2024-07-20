import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "User",
};

const UserPage: FC = (): ReactElement => {
  return <p>This is a user page.</p>;
};

export default UserPage;
