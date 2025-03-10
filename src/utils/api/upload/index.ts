import type { IUploadPayload, IUploadResponse } from "@/src/types";

import { deleteApi, getApi, postApi } from "../base";

const label = "Upload";

export const GETUpload = async (query?: string): Promise<IUploadResponse[]> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  return getApi<IUploadResponse[]>({
    endpoint: "/api/upload/files",
    label: label,
    params: params,
  });
};

export const GETUploadById = async (id: string): Promise<IUploadResponse> =>
  getApi<IUploadResponse>({
    endpoint: `/api/upload/files/${id}`,
    label: label,
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
