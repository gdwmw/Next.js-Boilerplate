export interface IExample {
  id: string;
  title: string;
}

// ----------------------------

export interface IAuthSchema {
  jwt: string;
  user: IUsersSchema;
}

export interface IRegisterPayload {
  email: string;
  password: string;
  username: string;
}

export interface ILoginPayload {
  identifier: string;
  password: string;
}

export interface IAuthResponse {
  datasDocumentId: string;
  email: string;
  id: number;
  image?: null | string;
  name: string;
  phoneNumber: string;
  role: string;
  status: string;
  token: string;
  username: string;
}

export interface INextAuthResponse {
  datasDocumentId: string;
  email?: null | string;
  id: string;
  image?: null | string;
  name?: null | string;
  phoneNumber: string;
  role: string;
  status: string;
  token: string;
  username: string;
}

// ----------------------------

export interface IUsersSchema {
  datasDocumentId: string;
  email: string;
  id: number;
  username: string;
}

export interface IUsersPayload {
  datasDocumentId: string;
  id: number;
}

export interface IUsersResponse {
  datasDocumentId: string;
}

// ----------------------------

export interface IDatasSchema {
  data: {
    documentId: string;
    image: { url: string };
    name: string;
    phoneNumber: string;
    role: string;
  };
}
export interface IDatasPayload {
  documentId?: string;
  image?: number;
  name: string;
  phoneNumber: string;
  role?: string;
}

export interface IDatasResponse {
  documentId: string;
  image: string;
  name: string;
  phoneNumber: string;
  role: string;
}

// ----------------------------
