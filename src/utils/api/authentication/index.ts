import { TRole } from "@/src/types";

import { IUserResponse } from "../user";

export interface IDummyAccount {
  email: string;
  password: string;
  response: IAuthResponse;
  username: string;
}

export interface IAuthSchema {
  jwt: string;
  user: IUserResponse;
}

interface IAuthCommon {
  blocked: boolean;
  confirmed: boolean;
  dataDocumentId: string;
  dataId: string;
  id: string;
  imageId: null | string;
  phoneNumber: string;
  role: TRole;
  status: string;
  token: string;
  username: string;
}

export interface IAuthResponse extends IAuthCommon {
  email: string;
  image?: null | string;
  name: string;
}

export interface INextAuthResponse extends IAuthCommon {
  email?: null | string;
  image?: null | string;
  name?: null | string;
}

export * from "./login";
export * from "./register";
