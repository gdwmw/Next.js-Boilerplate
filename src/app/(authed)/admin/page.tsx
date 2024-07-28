import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";
import { getServerSession } from "next-auth";

import { options } from "@/root/auth";

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
    <main className="flex h-screen flex-col items-center justify-center gap-3">
      <p className="text-2xl font-semibold">This is the admin page.</p>
      <pre className="rounded-lg border border-gray-300 bg-white p-2 text-sm">session: {JSON.stringify(session, null, 2)}</pre>
    </main>
  );
};

export default AdminPage;
