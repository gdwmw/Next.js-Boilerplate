import { INextAuthResponse } from "./api";

import "next-auth";
import "next-auth/jwt";

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "next-auth" {
  interface Session {
    user?: INextAuthResponse;
  }

  interface User extends INextAuthResponse {}
}

declare module "next-auth/jwt" {
  interface JWT extends INextAuthResponse {}
}
