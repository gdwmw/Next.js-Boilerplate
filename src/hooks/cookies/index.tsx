"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

interface I {
  name: string;
  options?: {
    maxAge?: number;
    path?: string;
  };
  value: string;
}

export const setCookie = async (props: I) => cookies().set(props.name, props.value, props.options);

export const getCookie = async (name: string): Promise<RequestCookie | undefined> => cookies().get(name);
