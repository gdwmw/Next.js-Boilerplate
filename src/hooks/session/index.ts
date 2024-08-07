"use server";

import { getServerSession, Session, User } from "next-auth";

import { options } from "@/auth";

type T = keyof User;

export const getSession = async (props: T): Promise<null | string | undefined> => {
  const session = await getServerSession(options);
  const res = session?.user?.[props];
  return res;
};

export const getAllSession = async (): Promise<null | Session> => {
  const session = await getServerSession(options);
  return session;
};
