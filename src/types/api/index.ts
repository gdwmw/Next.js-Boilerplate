import { TRole } from "../authentication";

// ----------------------------

export interface IDummyAccount {
  email: string;
  password: string;
  response: IAuthResponse;
  username: string;
}

// ----------------------------

interface IExampleCommon {
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IExampleSchema {
  data: {
    documentId: string;
  } & IExampleCommon;
}

export interface IExamplePayload extends IExampleCommon {
  documentId?: string;
}

export interface IExampleResponse extends IExampleCommon {}

// ----------------------------

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
  user: IUserResponse;
}

interface IAuthCommon {
  id: string;
  dataId: string;
  dataDocumentId: string;
  imageId: null | string;
  username: string;
  phoneNumber: string;
  role: TRole;
  status: string;
  token: string;
  confirmed: boolean;
  blocked: boolean;
}

export interface IAuthResponse extends IAuthCommon {
  name: string;
  email: string;
  image?: null | string;
}

export interface INextAuthResponse extends IAuthCommon {
  name?: null | string;
  email?: null | string;
  image?: null | string;
}

// ----------------------------

export interface IPasswordPayload {
  email?: string;
  code?: string;
  currentPassword?: string;
  password?: string;
  passwordConfirmation?: string;
}

// ----------------------------

export interface IUserPayload {
  id?: number;
  username?: string;
  email?: string;
  relation_data?: number;
}

export interface IUserResponse {
  id: number;
  username: string;
  email: string;
  relation_data?: IDataResponse;
  confirmed: boolean;
  blocked: boolean;
}

// ----------------------------

export interface IMetaResponse {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// ----------------------------

export interface IUploadPayload {
  files: FileList;
  ref?: string;
  refId?: string;
  field?: string;
}

export interface IFormatCommon {
  name: string;
  width: number;
  height: number;
  url: string;
}

export interface IUploadResponse {
  id: number;
  documentId: string;
  name: string;
  width: number;
  height: number;
  formats: {
    thumbnail: IFormatCommon;
    large: IFormatCommon;
    medium: IFormatCommon;
    small: IFormatCommon;
  };
  url: string;
}

// ----------------------------

interface IDataCommon {
  name: string;
  phoneNumber: string;
}

export interface IDataPayload extends IDataCommon {
  id?: number;
  documentId?: string;
  image?: FileList | number;
  role?: TRole;
}

export interface IDataResponse extends IDataCommon {
  id: number;
  documentId: string;
  image: IUploadResponse | null;
  role: TRole;
}
