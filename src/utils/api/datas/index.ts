import { IDatasPayload, IDatasResponse } from "@/src/types";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

const DUMMY_OBJECTS_DATA: IDatasResponse = {
  documentId: "",
  id: 0,
  image: null,
  name: "",
  phoneNumber: "",
  role: "",
};

const create = (response: IDatasResponse): IDatasResponse =>
  Object.keys(DUMMY_OBJECTS_DATA).reduce(
    (result, field) => ({
      ...result,
      [field]:
        field === "image"
          ? response[field]
            ? {
                id: response[field].id,
                url: API_URL + response[field].url,
              }
            : null
          : response[field as keyof IDatasResponse],
    }),
    {},
  ) as IDatasResponse;

const rearrange = (response: IDatasResponse): IDatasResponse => create(response);

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
  const { documentId, ...payloadWithoutDocumentId } = payload;
  try {
    const res = await fetch(`${API_URL}/api/datas/${documentId}?populate=*`, {
      body: JSON.stringify({ data: payloadWithoutDocumentId }),
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
