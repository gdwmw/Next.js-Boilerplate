import type { IDataPayload, IDataResponse } from "@/src/types";

import { getApi, postApi, putApi } from "../base";

const label = "Data";

export const GETDataByDocumentId = async (documentId: string): Promise<IDataResponse> => {
  const response = await getApi<{ data: IDataResponse }>({
    endpoint: `/api/datas/${documentId}`,
    label: label,
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
