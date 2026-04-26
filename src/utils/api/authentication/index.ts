export interface IDummyAccount {
  email: string;
  password: string;
  response: IAuthResponse;
  username: string;
}

export interface IAuthResponse {
  accessToken: string;
  email: string;
  id: string;
  image?: null | string;
  imageId?: null | string;
  name: string;
  phone: string;
  placeholder?: null | string;
  refreshToken: string;
  role: "admin" | "user";
  status: string;
  username: string;
}

export interface INextAuthResponse {
  accessToken?: string;
  email?: null | string;
  id?: string;
  image?: null | string;
  imageId?: null | string;
  name?: null | string;
  phone?: string;
  placeholder?: null | string;
  refreshToken?: string;
  role?: "admin" | "user";
  status?: string;
  username?: string;
}

export * from "./login";
export * from "./password";
export * from "./register";
