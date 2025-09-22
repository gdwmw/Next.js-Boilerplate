import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import { FormContainer } from "@/src/components";
import { getAllSession } from "@/src/utils";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "User (Example)",
};

const UserPage: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  return (
    <main>
      <FormContainer className={{ innerContainer: "w-full max-w-[435px] flex-col items-center gap-3" }} href="/" label="Home">
        <header>
          <h1 className="text-center text-2xl font-semibold">
            This is <span className="text-blue-500">User</span> page
          </h1>
        </header>
        <div className="w-full overflow-x-auto rounded-lg border border-black p-2 dark:border-white">
          <pre className="w-fit text-sm">session: {JSON.stringify(session, null, 2)}</pre>
        </div>
      </FormContainer>
    </main>
  );
};

export default UserPage;
