import { deleteApi, getApi, ISuccessResponse, postApi } from "./base";

export interface IUploadPayload {
  file: File;
}

export interface IImageFormat {
  filename: string;
  height: number;
  mimetype: string;
  path: string;
  size: number;
  url: string;
  width: number;
}

export interface IUploadResponse {
  createdAt: Date;
  dominantColor: null | string;
  filename: string;
  formats: null | Record<string, IImageFormat>;
  height: null | number;
  id: number;
  mimetype: string;
  originalFilename: string;
  path: string;
  placeholder: null | string;
  size: number;
  url: string;
  width: null | number;
}

type TQueryParams = Record<string, unknown>;

const label = "Upload";

export const GETUpload = async (params?: TQueryParams): Promise<ISuccessResponse<IUploadResponse[]>> =>
  getApi<IUploadResponse[]>({
    endpoint: "/upload",
    label: label,
    params: params,
  });

export const GETUploadById = async (id: string, params?: TQueryParams): Promise<ISuccessResponse<IUploadResponse>> =>
  getApi<IUploadResponse>({
    endpoint: `/upload/${id}`,
    label: label,
    params: params,
  });

export const POSTUpload = async (payload: IUploadPayload): Promise<ISuccessResponse<IUploadResponse>> => {
  const formData = new FormData();
  formData.append("file", payload.file);

  return postApi<IUploadResponse>({
    data: formData,
    endpoint: "/upload",
    label: label,
  });
};

export const DELETEUpload = async (id: number): Promise<ISuccessResponse<IUploadResponse>> =>
  deleteApi<IUploadResponse>({
    endpoint: `/upload/${id}`,
    label: label,
  });
