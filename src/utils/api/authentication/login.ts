import { IAuthResponse, IUploadResponse } from "..";
import { ISuccessResponse, postApi } from "../base";

export interface ILoginPayload {
  identifier: string;
  method: "email" | "username";
  password: string;
}

interface IElysiaLoginData {
  accessToken: string;
  email: string;
  id: number;
  image: IUploadResponse | null;
  imageId: null | number;
  name: string;
  phone: string;
  refreshToken: string;
  role: "admin" | "user";
  username: string;
}

const label = "Login";

export const POSTLogin = async (payload: ILoginPayload): Promise<ISuccessResponse<IAuthResponse>> => {
  const res = await postApi<IElysiaLoginData>({
    auth: false,
    data: payload,
    endpoint: "/auth/login",
    label,
  });

  return {
    data: {
      ...res.data,
      status: "authenticated",
    },
    message: res.message,
    success: true,
  };
};
