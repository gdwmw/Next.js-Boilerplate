import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";
import { getServerSession } from "next-auth";

import { options } from "../../api/auth/[...nextauth]/options";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Admin",
};

const AdminPage: FC = async (): Promise<ReactElement> => {
  const session = await getServerSession(options);

  return (
    <main>
      <p>This is the admin page.</p>
      <pre>Session: {JSON.stringify(session, null, 2)}</pre>
    </main>
  );
};

export default AdminPage;
