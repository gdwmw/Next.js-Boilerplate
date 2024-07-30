"use server";

import { getServerSession, User } from "next-auth";

import { options } from "@/root/auth";

type T = keyof User;

export const getSession = async (props: T): Promise<null | string | undefined> => {
  const session = await getServerSession(options);
  const res = session?.user?.[props];
  return res;
};
