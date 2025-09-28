import { getSession } from "@/src/utils";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

type THttpMethod = "DELETE" | "GET" | "POST" | "PUT";

interface I {
  cache?: RequestCache;
  data?: unknown;
  endpoint: string;
  headers?: HeadersInit;
  label: string;
  method?: THttpMethod;
  params?: Record<string, string>;
}

export const apiRequest = async <T>(props: I): Promise<T> => {
  const queryParams = props.params ? new URLSearchParams(props.params).toString() : "";
  const url = `${API_URL}${props.endpoint}${queryParams && `?${queryParams}`}`;

  const isFormData = props.data instanceof FormData;
  const token = await getSession("token");

  try {
    const res = await fetch(url, {
      body: isFormData ? (props.data as FormData) : JSON.stringify(props.data),
      cache: props.cache || "default",
      headers: {
        ...(!isFormData && { "Content-Type": "application/json" }),
        ...(token && { Authorization: `Bearer ${token}` }),
        ...props.headers,
      },
      method: props.method,
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(
        `An error occurred while processing ${props.method} request for ${props.label} || Status Code: ${res.status} || Message: ${response.error.message}`,
      );
    }

    return response;
  } catch (error) {
    console.error("--- API Request Error ---", error);
    throw error;
  }
};

export const getApi = <T>(props: Omit<I, "data" | "headers">) => apiRequest<T>({ ...props, method: "GET" });

export const postApi = <T>(props: Omit<I, "params">) => apiRequest<T>({ ...props, method: "POST" });

export const putApi = <T>(props: Omit<I, "params">) => apiRequest<T>({ ...props, method: "PUT" });

export const deleteApi = <T>(props: Omit<I, "data" | "headers" | "params">) => apiRequest<T>({ ...props, method: "DELETE" });
