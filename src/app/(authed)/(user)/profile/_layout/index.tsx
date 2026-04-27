import { FC, ReactElement } from "react";

import { getAllSession } from "@/src/utils";

import { Main } from "./modules";

const ProfileLayout: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  return <Main session={session} />;
};

export default ProfileLayout;
