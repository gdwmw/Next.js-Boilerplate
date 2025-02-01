import { IExamplePayload, IExampleResponse, IExampleSchema } from "@/src/types/example";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

type TFields = keyof IExampleResponse;

const FIELDS_DATA: TFields[] = ["documentId", "email", "name", "phoneNumber", "username"];

// eslint-disable-next-line
const createExampleResponse = (source: any): IExampleResponse =>
  FIELDS_DATA.reduce(
    (result, field) => ({
      ...result,
      [field]: source[field],
    }),
    {},
  ) as IExampleResponse;

const rearrangeAll = (dt: IExampleResponse): IExampleResponse => createExampleResponse(dt);

const rearrange = (dt: IExampleSchema): IExampleResponse => createExampleResponse(dt.data);

export const GETExample = async (query?: string): Promise<IExampleResponse[]> => {
  try {
    const res = await fetch(`${API_URL}/api/example?${query ? query + "&" : ""}populate=*`);

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to get: Example with status ${res.status} || ${response.error.message}`);
    }

    return response.data.map(rearrangeAll);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const GETExampleByDocumentId = async (documentId: string): Promise<IExampleResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/example/${documentId}?populate=*`);

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to get: Example By Document ID with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const POSTExample = async (payload: IExamplePayload): Promise<IExampleResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/example?populate=*`, {
      body: JSON.stringify({ data: payload }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to post: Example with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTExample = async (payload: IExamplePayload): Promise<IExampleResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/example/${payload.documentId}?populate=*`, {
      body: JSON.stringify({ data: payload }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to put: Example with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const DELETEExample = async (documentId: string): Promise<IExampleResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/example/${documentId}?populate=*`, {
      method: "DELETE",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to delete: Example with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
