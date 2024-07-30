export interface IExample {
  id: string;
  title: string;
}

// ----------------------------

export interface IAuthPayload {
  confirmPassword?: string;
  email?: string;
  name?: string;
  password: string;
  username: string;
}

export interface IAuthResponse {
  email?: null | string;
  id: string;
  image?: null | string;
  name?: null | string;
  role?: null | string;
  token?: null | string;
  username?: null | string;
}
