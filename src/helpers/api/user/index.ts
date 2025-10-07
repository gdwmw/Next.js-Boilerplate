import type { IUserPayload, IUserResponse } from "@/src/types";

import { getApi, putApi } from "../base";

const label = "User";

export const GETUserByDocumentId = async (id: number, query?: string): Promise<IUserResponse> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  return getApi<IUserResponse>({
    endpoint: `/api/users/${id}`,
    label: label,
    params: params,
  });
};

export const PUTUser = async (payload: IUserPayload): Promise<IUserResponse> =>
  putApi<IUserResponse>({
    data: payload,
    endpoint: `/api/users/${payload.id}`,
    label: label,
  });
