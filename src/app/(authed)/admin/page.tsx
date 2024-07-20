import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Admin",
};

const AdminPage: FC = (): ReactElement => {
  return <p>This is an admin page.</p>;
};

export default AdminPage;
