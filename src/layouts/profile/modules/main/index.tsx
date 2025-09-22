import { FC, ReactElement } from "react";

import { getAllSession } from "@/src/utils";

import { Content } from "./batches";

export const Main: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  return <Content session={session} />;
};
