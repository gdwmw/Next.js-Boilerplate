import { IAuthResponse } from "./src/utils";

import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: Omit<IAuthResponse, "email" | "id" | "image" | "name">;
  }

  interface User extends IAuthResponse {}
}

declare module "next-auth/jwt" {
  interface JWT extends IAuthResponse {}
}
