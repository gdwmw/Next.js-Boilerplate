import { redirect } from "next/navigation";
import { FC, ReactElement } from "react";

import { getAllSession } from "@/src/utils";

import { Main } from "./modules";

const LoginLayout: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  if (session?.user?.status) {
    redirect("/");
  }

  return <Main />;
};

export default LoginLayout;
