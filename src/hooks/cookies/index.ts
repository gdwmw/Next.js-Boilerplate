"use server";

import { CookieListItem, RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const setCookie = async (props: CookieListItem) => {
  const cookieStore = await cookies();
  cookieStore.set(props);
};

export const getCookie = async (name: string): Promise<RequestCookie | undefined> => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const deleteCookie = async (name: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(name);
};
