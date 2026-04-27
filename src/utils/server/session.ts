"use server";

import { getServerSession, Session, User } from "next-auth";

import { options } from "@/configs/authentication";

import { IUploadResponse } from "../api";

type T = keyof User;

export const getSession = async (props: T): Promise<boolean | IUploadResponse | null | number | string | undefined> => {
  const session = await getServerSession(options);
  return session?.user?.[props];
};

export const getAllSession = async (): Promise<null | Session> => await getServerSession(options);
