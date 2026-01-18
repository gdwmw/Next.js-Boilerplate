import type { IExamplePayload, IExampleResponse } from "@/src/types";

import { deleteApi, getApi, postApi, putApi } from "../base";

const label = "Example";

export const GETExample = async (query?: string): Promise<IExampleResponse[]> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  const response = await getApi<{ data: IExampleResponse[] }>({
    endpoint: "/api/example",
    label: label,
    params: params,
  });
  return response.data;
};

export const GETExampleByDocumentId = async (documentId: string, query?: string): Promise<IExampleResponse> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  const response = await getApi<{ data: IExampleResponse }>({
    endpoint: `/api/example/${documentId}`,
    label: label,
    params: params,
  });
  return response.data;
};

export const POSTExample = async (payload: IExamplePayload): Promise<IExampleResponse> => {
  const response = await postApi<{ data: IExampleResponse }>({
    data: { data: payload },
    endpoint: "/api/example",
    label: label,
  });
  return response.data;
};

export const PUTExample = async (payload: IExamplePayload): Promise<IExampleResponse> => {
  const { documentId, ...restPayload } = payload;
  const response = await putApi<{ data: IExampleResponse }>({
    data: { data: restPayload },
    endpoint: `/api/example/${documentId}`,
    label: label,
  });
  return response.data;
};

export const DELETEExample = async (documentId: string): Promise<IExampleResponse> => {
  const response = await deleteApi<{ data: IExampleResponse }>({
    endpoint: `/api/example/${documentId}`,
    label: label,
  });
  return response.data;
};
