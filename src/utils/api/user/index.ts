import type { IUserPayload, IUserResponse } from "@/src/types";

import { getApi, putApi } from "../base";

const label = "User";

export const GETUserByDocumentId = async (id: number): Promise<IUserResponse> =>
  getApi<IUserResponse>({
    endpoint: `/api/users/${id}`,
    label: label,
  });

export const PUTUser = async (payload: IUserPayload): Promise<IUserResponse> =>
  putApi<IUserResponse>({
    data: payload,
    endpoint: `/api/users/${payload.id}`,
    label: label,
  });
