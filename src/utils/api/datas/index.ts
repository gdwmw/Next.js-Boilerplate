import { IDatasPayload, IDatasResponse } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

type TFields = keyof IDatasResponse;

const FIELDS_DATA: TFields[] = ["documentId", "image", "name", "phoneNumber", "role"];

// eslint-disable-next-line
const createDataResponse = (source: any): IDatasResponse =>
  FIELDS_DATA.reduce(
    (result, field) => ({
      ...result,
      [field]: field === "image" ? (source[field]?.url ? API_URL + source[field].url : null) : source[field],
    }),
    {},
  ) as IDatasResponse;

const rearrange = (response: IDatasResponse): IDatasResponse => createDataResponse(response);

export const GETDatas = async (query?: string): Promise<IDatasResponse[]> => {
  try {
    const res = await fetch(`${API_URL}/api/datas?${query ? query + "&" : ""}populate=*`);

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to get: Datas with status ${res.status} || ${response.error.message}`);
    }

    return response.data.map(rearrange);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const GETDatasByDocumentId = async (documentId: string): Promise<IDatasResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/datas/${documentId}?populate=*`);

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to get: Datas By Document ID with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const POSTDatas = async (payload: IDatasPayload): Promise<IDatasResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/datas?populate=*`, {
      body: JSON.stringify({ data: payload }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to post: Datas with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTDatas = async (payload: IDatasPayload): Promise<IDatasResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/datas/${payload.documentId}?populate=*`, {
      body: JSON.stringify({ data: payload }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to put: Datas with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const DELETEDatas = async (documentId: string): Promise<IDatasResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/datas/${documentId}?populate=*`, {
      method: "DELETE",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to delete: Datas with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
