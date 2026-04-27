import { IUploadResponse } from "../upload";

export interface IDummyAccount {
  email: string;
  password: string;
  response: IAuthResponse;
  username: string;
}

export interface IAuthResponse {
  accessToken: string;
  email: string;
  id: number;
  image?: IUploadResponse | null;
  imageId?: null | number;
  name: string;
  phone: string;
  refreshToken: string;
  role: "admin" | "user";
  status: string;
  username: string;
}

export interface INextAuthResponse {
  accessToken?: string;
  email?: null | string;
  id?: number;
  image?: IUploadResponse | null;
  imageId?: null | number;
  name?: null | string;
  phone?: string;
  refreshToken?: string;
  role?: "admin" | "user";
  status?: string;
  username?: string;
}

export * from "./login";
export * from "./logout";
export * from "./password";
export * from "./register";
