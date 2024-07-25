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
  email: string;
  id: string;
  image?: null | string;
  name: string;
  role: string;
  token: string;
  username: string;
}
