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
      <FormContainer className={{ innerContainer: "h-full max-h-[639px] max-w-[435px] flex-col items-center gap-3" }} href="/" label="Home">
        <header>
          <h1 className="text-center text-2xl font-semibold text-blue-500">User Page</h1>
          <p className="text-center text-sm tracking-wide">This is the user page of the application</p>
        </header>
        <div className="max-h-full max-w-full overflow-hidden rounded-lg border border-blue-500">
          <div className="size-full overflow-auto p-2">
            <pre className="w-fit text-sm">session: {JSON.stringify(session, null, 2)}</pre>
          </div>
        </div>
      </FormContainer>
    </main>
  );
};

export default UserPage;
