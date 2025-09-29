import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from "axios";

import { getSession } from "@/src/utils";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface I {
  auth?: boolean;
  data?: unknown;
  endpoint: string;
  headers?: AxiosRequestHeaders;
  label: string;
  method?: Method;
  // eslint-disable-next-line
  params?: Record<string, any>;
}

export const apiRequest = async <T>({ auth = true, ...props }: I): Promise<T> => {
  const fetchToken = async () => await getSession("token");

  try {
    const token = auth && (await fetchToken());

    const config: AxiosRequestConfig = {
      data: props.data,
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...props.headers,
      },
      method: props.method,
      params: props.params,
      url: `${API_URL}${props.endpoint}`,
    };

    const res: AxiosResponse<T> = await axios(config);

    return res.data;
  } catch (error) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const statusCode = (error as any)?.response?.status;
    const errorMessage = (error as any)?.response?.data?.error?.message || (error as Error)?.message;

    console.error(
      "--- API Request Error ---",
      `An error occurred while processing ${props.method} request for ${props.label} || Status Code: ${statusCode} || Message: ${errorMessage}`,
    );

    throw new Error(errorMessage);
  }
};

export const getApi = <T>(props: Omit<I, "data" | "method">): Promise<T> => apiRequest<T>({ ...props, method: "GET" });

export const postApi = <T>(props: Omit<I, "method" | "params">): Promise<T> => apiRequest<T>({ ...props, method: "POST" });

export const putApi = <T>(props: Omit<I, "method" | "params">): Promise<T> => apiRequest<T>({ ...props, method: "PUT" });

export const deleteApi = <T>(props: Omit<I, "data" | "method" | "params">): Promise<T> => apiRequest<T>({ ...props, method: "DELETE" });
