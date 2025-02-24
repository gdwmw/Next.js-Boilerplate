import { IUploadPayload, IUploadResponse } from "@/src/types";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

const DUMMY_OBJECTS_DATA: IUploadResponse = {
  documentId: "",
  formats: null,
  id: 0,
  name: "",
  url: "",
};

const create = (response: IUploadResponse): IUploadResponse =>
  Object.keys(DUMMY_OBJECTS_DATA).reduce(
    (result, field) => ({
      ...result,
      [field]:
        field === "formats"
          ? response[field]
            ? { thumbnail: { url: API_URL + response[field].thumbnail.url } }
            : null
          : field === "url"
            ? API_URL + response[field]
            : response[field as keyof IUploadResponse],
    }),
    {} as IUploadResponse,
  );

const rearrange = (response: IUploadResponse): IUploadResponse => create(response);

export const GETUpload = async (query?: string): Promise<IUploadResponse[]> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files?${query ? query + "&" : ""}populate=*`);

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to get: Upload with status ${res.status} || ${response.error.message}`);
    }

    return response.map(rearrange);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const GETUploadById = async (id: string): Promise<IUploadResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files/${id}?populate=*`);

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to get: Upload By ID with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const POSTUpload = async (payload: IUploadPayload): Promise<IUploadResponse[]> => {
  try {
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

    const res = await fetch(`${API_URL}/api/upload?populate=*`, {
      body: formData,
      method: "POST",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to post: Upload with status ${res.status} || ${response.error.message}`);
    }

    return response.map(rearrange);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const DELETEUpload = async (id: number): Promise<IUploadResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files/${id}?populate=*`, {
      method: "DELETE",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to delete: Upload with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
