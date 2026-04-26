import { deleteApi, getApi, ISuccessResponse, putApi } from "./base";

export interface IImageFile {
  createdAt: Date;
  dominantColor: null | string;
  filename: string;
  formats: null | Record<string, unknown>;
  height: null | number;
  id: number;
  mimetype: string;
  originalFilename: string;
  path: string;
  placeholder: null | string;
  size: number;
  updatedAt: Date;
  url: string;
  width: null | number;
}

export interface IUserPayload {
  email?: string;
  imageId?: null | number;
  name?: string;
  phone?: string;
  role?: "admin" | "user";
  username?: string;
}

export interface IUserResponse {
  createdAt: Date;
  email: string;
  id: number;
  image?: IImageFile;
  imageId?: null | number;
  name: string;
  phone: string;
  role: "admin" | "user";
  updatedAt: Date;
  username: string;
}

type TQueryParams = Record<string, unknown>;

const label = "User";

export const GETUsers = async (params?: TQueryParams): Promise<ISuccessResponse<IUserResponse[]>> =>
  getApi<IUserResponse[]>({
    endpoint: "/users",
    label: label,
    params: params,
  });

export const GETUser = async (id: number, params?: TQueryParams): Promise<ISuccessResponse<IUserResponse>> =>
  getApi<IUserResponse>({
    endpoint: `/users/${id}`,
    label: label,
    params: params,
  });

export const PUTUser = async (id: number, payload: IUserPayload): Promise<ISuccessResponse<IUserResponse>> =>
  putApi<IUserResponse>({
    data: payload,
    endpoint: `/users/${id}`,
    label: label,
  });

export const DELETEUser = async (id: number): Promise<ISuccessResponse<IUserResponse>> =>
  deleteApi<IUserResponse>({
    endpoint: `/users/${id}`,
    label: label,
  });
