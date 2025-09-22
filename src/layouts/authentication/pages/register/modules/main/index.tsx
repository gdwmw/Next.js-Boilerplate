import { redirect } from "next/navigation";
import { FC, ReactElement } from "react";

import { getAllSession } from "@/src/utils";

import { Content } from "./batches";

export const Main: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  if (session?.user?.status) {
    redirect("/");
  }

  return <Content />;
};
