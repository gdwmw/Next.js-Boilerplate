import { deleteApi, getApi, ISuccessResponse, patchApi, postApi, putApi } from "./base";

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

export const GETExample = async (params?: TQueryParams): Promise<ISuccessResponse<IExampleResponse[]>> =>
  getApi<IExampleResponse[]>({
    endpoint: "/api/example",
    label: label,
    params: params,
  });

export const GETExampleByDocumentId = async (documentId: string, params?: TQueryParams): Promise<ISuccessResponse<IExampleResponse>> =>
  getApi<IExampleResponse>({
    endpoint: `/api/example/${documentId}`,
    label: label,
    params: params,
  });

export const POSTExample = async (payload: IExamplePayload): Promise<ISuccessResponse<IExampleResponse>> =>
  postApi<IExampleResponse>({
    data: { data: payload },
    endpoint: "/api/example",
    label: label,
  });

export const PUTExample = async (payload: IExamplePayload): Promise<ISuccessResponse<IExampleResponse>> => {
  const { documentId, ...restPayload } = payload;
  return putApi<IExampleResponse>({
    data: { data: restPayload },
    endpoint: `/api/example/${documentId}`,
    label: label,
  });
};

export const PATCHExample = async (payload: IExamplePayload): Promise<ISuccessResponse<IExampleResponse>> => {
  const { documentId, ...restPayload } = payload;
  return patchApi<IExampleResponse>({
    data: { data: restPayload },
    endpoint: `/api/example/${documentId}`,
    label: label,
  });
};

export const DELETEExample = async (documentId: string): Promise<ISuccessResponse<IExampleResponse>> =>
  deleteApi<IExampleResponse>({
    endpoint: `/api/example/${documentId}`,
    label: label,
  });
