import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from "axios";

import { getSession } from "@/src/utils";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export interface ISuccessResponse<T> {
  data: T;
  message: string;
  success: true;
}

export interface IErrorResponse {
  code: null | string;
  message: null | string;
  success: false;
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

export const apiRequest = async <T>({ auth = true, ...props }: I): Promise<ISuccessResponse<T>> => {
  const fetchToken = async () => await getSession("accessToken");

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

    const res: AxiosResponse<ISuccessResponse<T>> = await axios(config);

    return res.data;
  } catch (error) {
    let statusCode: number | undefined;
    let errorMessage = "Unknown error occurred";

    if (axios.isAxiosError<IErrorResponse>(error)) {
      if (process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_DEBUG_MODE === "true") {
        console.error("Axios error response:", error.response);
      }
      statusCode = error.response?.status;
      errorMessage = error.response?.data?.message ?? error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error(
      "--- API Request Error ---",
      `An error occurred while processing ${props.method} request for ${props.label} || Status Code: ${statusCode} || Message: ${errorMessage}`,
    );

    throw error;
  }
};

export const getApi = <T>(props: Omit<I, "data" | "method">): Promise<ISuccessResponse<T>> => apiRequest<T>({ ...props, method: "GET" });

export const postApi = <T>(props: Omit<I, "method" | "params">): Promise<ISuccessResponse<T>> => apiRequest<T>({ ...props, method: "POST" });

export const putApi = <T>(props: Omit<I, "method" | "params">): Promise<ISuccessResponse<T>> => apiRequest<T>({ ...props, method: "PUT" });

export const patchApi = <T>(props: Omit<I, "method" | "params">): Promise<ISuccessResponse<T>> => apiRequest<T>({ ...props, method: "PATCH" });

export const deleteApi = <T>(props: Omit<I, "data" | "method" | "params">): Promise<ISuccessResponse<T>> =>
  apiRequest<T>({ ...props, method: "DELETE" });
