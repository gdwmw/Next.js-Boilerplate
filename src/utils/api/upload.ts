import { deleteApi, getApi, postApi } from "./base";

export interface IUploadPayload {
  field?: string;
  files: FileList;
  ref?: string;
  refId?: string;
}

export interface IFormatCommon {
  height: number;
  name: string;
  url: string;
  width: number;
}

export interface IUploadResponse {
  documentId: string;
  formats: {
    large: IFormatCommon;
    medium: IFormatCommon;
    small: IFormatCommon;
    thumbnail: IFormatCommon;
  };
  height: number;
  id: number;
  name: string;
  url: string;
  width: number;
}

type TQueryParams = Record<string, unknown>;

const label = "Upload";

export const GETUpload = async (params?: TQueryParams): Promise<IUploadResponse[]> =>
  getApi<IUploadResponse[]>({
    endpoint: "/api/upload/files",
    label: label,
    params: params,
  });

export const GETUploadById = async (id: string, params?: TQueryParams): Promise<IUploadResponse> =>
  getApi<IUploadResponse>({
    endpoint: `/api/upload/files/${id}`,
    label: label,
    params: params,
  });

export const POSTUpload = async (payload: IUploadPayload): Promise<IUploadResponse[]> => {
  const formData = new FormData();

  for (const file of payload.files) {
    formData.append("files", file);
  }

  if (payload.ref) {
    formData.append("ref", payload.ref);
  }
  if (payload.refId) {
    formData.append("refId", payload.refId);
  }
  if (payload.field) {
    formData.append("field", payload.field);
  }

  return postApi<IUploadResponse[]>({
    data: formData,
    endpoint: "/api/upload",
    label: label,
  });
};

export const DELETEUpload = async (id: number): Promise<IUploadResponse> =>
  deleteApi<IUploadResponse>({
    endpoint: `/api/upload/files/${id}`,
    label: label,
  });
