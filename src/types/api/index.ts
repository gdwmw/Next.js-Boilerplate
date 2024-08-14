export interface IExample {
  id: string;
  title: string;
}

// ----------------------------

export interface IRegisterPayload {
  email: string;
  name: string;
  password: string;
  username: string;
}

export interface ILoginPayload {
  identifier: string;
  password: string;
}

export interface IAuthResponse {
  email: string;
  id: number;
  image?: null | string;
  name: string;
  role: string;
  status: string;
  token: string;
  username: string;
}

export interface INextAuthResponse {
  email?: null | string;
  id: string;
  image?: null | string;
  name?: null | string;
  role: string;
  status: string;
  token: string;
  username: string;
}
