import { IAuthResponse } from "./api";

import "next-auth";
import "next-auth/jwt";

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "next-auth" {
  interface Session {
    user?: { status?: null | string } & IAuthResponse;
  }

  interface User extends IAuthResponse {
    status?: null | string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IAuthResponse {
    status?: null | string;
  }
}
