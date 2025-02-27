import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import { FormContainer } from "@/src/components";
import { getAllSession } from "@/src/hooks";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Admin (Example)",
};

const AdminPage: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  return (
    <main className="bg-slate-100">
      <FormContainer innerContainerClassName="flex-col items-center gap-3">
        <header>
          <h1 className="text-2xl font-semibold">
            This is <span className="text-rose-400">Admin</span> page
          </h1>
        </header>
        <pre className="rounded-lg border border-gray-300 bg-white p-2 text-sm">session: {JSON.stringify(session, null, 2)}</pre>
      </FormContainer>
    </main>
  );
};

export default AdminPage;
