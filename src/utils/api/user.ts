import { getApi, putApi } from "./base";
import { IDataResponse } from "./data";

export interface IUserPayload {
  email?: string;
  id?: number;
  relation_data?: number;
  username?: string;
}

export interface IUserResponse {
  blocked: boolean;
  confirmed: boolean;
  email: string;
  id: number;
  relation_data?: IDataResponse;
  username: string;
}

type TQueryParams = Record<string, unknown>;

const label = "User";

export const GETUserByDocumentId = async (id: number, params?: TQueryParams): Promise<IUserResponse> =>
  getApi<IUserResponse>({
    endpoint: `/api/users/${id}`,
    label: label,
    params: params,
  });

export const PUTUser = async (payload: IUserPayload): Promise<IUserResponse> =>
  putApi<IUserResponse>({
    data: payload,
    endpoint: `/api/users/${payload.id}`,
    label: label,
  });
