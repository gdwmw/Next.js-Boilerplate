import { IAuthResponse } from "./api";

import "next-auth";
import "next-auth/jwt";

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "next-auth" {
  interface Session {
    user?: IAuthResponse;
  }

  interface User extends IAuthResponse {}
}

declare module "next-auth/jwt" {
  interface JWT extends IAuthResponse {}
}
