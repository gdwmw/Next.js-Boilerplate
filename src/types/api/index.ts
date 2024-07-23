export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface ILoginPayload {
  identifier: string;
  password: string;
}

export interface IAuthSchema {
  jwt: string;
  user: IUsersResponse;
}

export interface IAuthResponse {
  id: string;
  datasId: string;
  datasDocumentId: string;
  imageId: null | string;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  image?: null | string;
  role: string;
  status: string;
  token: string;
}

export interface INextAuthResponse {
  id: string;
  datasId: string;
  datasDocumentId: string;
  imageId: null | string;
  username: string;
  name?: null | string;
  email?: null | string;
  phoneNumber: string;
  image?: null | string;
  role: string;
  status: string;
  token: string;
}

// ----------------------------

export interface IPasswordPayload {
  email?: string;
  code?: string;
  currentPassword?: string;
  password?: string;
  passwordConfirmation?: string;
}

export interface IPasswordResponse extends IUsersResponse {
  token: string;
}

// ----------------------------

export interface IUsersPayload {
  id?: number;
  username?: string;
  email?: string;
  datasDocumentId?: string;
}

export interface IUsersResponse {
  id: number;
  username: string;
  email: string;
  datasDocumentId?: string;
}

// ----------------------------

export interface IUploadPayload {
  files: FileList;
  ref?: string;
  refId?: string;
  field?: string;
}

export interface IUploadResponse {
  id: number;
  documentId: string;
  name: string;
  url: string;
  formats: { thumbnail: { url: string } } | null;
}

// ----------------------------

export interface IDatasPayload {
  id?: number;
  documentId?: string;
  name: string;
  phoneNumber: string;
  image?: FileList | number;
  role?: string;
  bookings?: string;
  reviews?: string;
  questionnaires?: string;
}

export interface IDatasResponse {
  id: number;
  documentId: string;
  name: string;
  phoneNumber: string;
  image: {
    id: number;
    url: string;
  } | null;
  role: string;
}
