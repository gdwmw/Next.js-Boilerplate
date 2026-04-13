import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from "axios";

import { getSession } from "@/src/helpers";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("Please check your environment variables. NEXT_PUBLIC_BASE_API_URL is not defined.");
}

interface IMetaResponse {
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface IErrorResponse {
  error: {
    details: object;
    message: string;
    name: string;
    status: number;
  };
}

type TResponse<T> = IMetaResponse & T;

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

export const apiRequest = async <T>({ auth = true, ...props }: I): Promise<TResponse<T>> => {
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

    const res: AxiosResponse<TResponse<T>> = await axios(config);

    return res.data;
  } catch (error) {
    let statusCode: number | undefined;
    let errorMessage = "Unknown Error";

    if (axios.isAxiosError<IErrorResponse>(error)) {
      // console.log(error.response);
      statusCode = error.response?.status;
      errorMessage = error.response?.data?.error?.message ?? error.message;
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

export const getApi = <T>(props: Omit<I, "data" | "method">): Promise<TResponse<T>> => apiRequest<T>({ ...props, method: "GET" });

export const postApi = <T>(props: Omit<I, "method" | "params">): Promise<TResponse<T>> => apiRequest<T>({ ...props, method: "POST" });

export const putApi = <T>(props: Omit<I, "method" | "params">): Promise<TResponse<T>> => apiRequest<T>({ ...props, method: "PUT" });

export const deleteApi = <T>(props: Omit<I, "data" | "method" | "params">): Promise<TResponse<T>> => apiRequest<T>({ ...props, method: "DELETE" });

/*
PENJELASAN TIPE GENERIK DENGAN CONTOH PENGGUNAAN:

// 1. User panggil dengan <{ data: IDataResponse }>
const response = await getApi<{ data: IDataResponse }>({
  endpoint: `/api/datas/${documentId}`,
  label: label,
  params: params,
});

// 2. T sekarang = { data: IDataResponse }
// TResponse<T> = IMetaResponse & T
// Maka TResponse<{ data: IDataResponse }> = IMetaResponse & { data: IDataResponse }
// getApi menjadi:
getApi = <{ data: IDataResponse }>(
  props: Omit<I, "data" | "method">
): Promise<IMetaResponse & { data: IDataResponse }> => 
  apiRequest<{ data: IDataResponse }>({ ...props, method: "GET" });

// 3. apiRequest terima T = { data: IDataResponse }
export const apiRequest = async <{ data: IDataResponse }>({ auth = true, ...props }: I): Promise<IMetaResponse & { data: IDataResponse }> => {
  // ...
  
  // 4. axios return AxiosResponse<IMetaResponse & { data: IDataResponse }>
  const res: AxiosResponse<IMetaResponse & { data: IDataResponse }> = await axios(config);
  
  // 5. res.data bertipe IMetaResponse & { data: IDataResponse }
  return res.data;  // ← return data + meta (saat request sukses)
}

// 6. Final result - response bertipe IMetaResponse & { data: IDataResponse }
const response: IMetaResponse & { data: IDataResponse } = await getApi<{ data: IDataResponse }>({ ... });
*/
