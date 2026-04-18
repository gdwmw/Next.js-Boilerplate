import { deleteApi, getApi, postApi, putApi } from "../base";

interface IExampleCommon {
  email: string;
  name: string;
  phoneNumber: string;
  username: string;
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

type TQueryParams = Record<string, unknown>;

const label = "Example";

export const GETExample = async (params?: TQueryParams): Promise<IExampleResponse[]> => {
  const response = await getApi<{ data: IExampleResponse[] }>({
    endpoint: "/api/example",
    label: label,
    params: params,
  });
  return response.data;
};

export const GETExampleByDocumentId = async (documentId: string, params?: TQueryParams): Promise<IExampleResponse> => {
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
