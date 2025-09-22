"use server";

import { getServerSession, Session, User } from "next-auth";

import { options } from "@/configs/authentication";

type T = keyof User;

export const getSession = async (props: T): Promise<boolean | null | string | undefined> => {
  const session = await getServerSession(options);
  return session?.user?.[props];
};

export const getAllSession = async (): Promise<null | Session> => await getServerSession(options);
