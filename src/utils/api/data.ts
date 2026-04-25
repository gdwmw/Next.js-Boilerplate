import { TRole } from "@/src/types";

import { getApi, postApi, putApi } from "./base";
import { IUploadResponse } from "./upload";

interface IDataCommon {
  name: string;
  phoneNumber: string;
}

export interface IDataPayload extends IDataCommon {
  documentId?: string;
  id?: number;
  image?: FileList | number;
  role?: TRole;
}

export interface IDataResponse extends IDataCommon {
  documentId: string;
  id: number;
  image: IUploadResponse | null;
  role: TRole;
}

type TQueryParams = Record<string, unknown>;

const label = "Data";

export const GETDataByDocumentId = async (documentId: string, params?: TQueryParams): Promise<IDataResponse> => {
  const response = await getApi<{ data: IDataResponse }>({
    endpoint: `/api/datas/${documentId}`,
    label: label,
    params: params,
  });
  return response.data;
};

export const POSTData = async (payload: IDataPayload): Promise<IDataResponse> => {
  const response = await postApi<{ data: IDataResponse }>({
    data: { data: payload },
    endpoint: "/api/datas",
    label: label,
  });
  return response.data;
};

export const PUTData = async (payload: IDataPayload): Promise<IDataResponse> => {
  const { documentId, ...restPayload } = payload;
  const response = await putApi<{ data: IDataResponse }>({
    data: { data: restPayload },
    endpoint: `/api/datas/${documentId}`,
    label: label,
  });
  return response.data;
};
