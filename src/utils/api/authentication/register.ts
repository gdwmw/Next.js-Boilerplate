import { IAuthResponse } from "..";
import { ISuccessResponse, postApi } from "../base";

export interface IRegisterPayload {
  email: string;
  name: string;
  password: string;
  phone: string;
  username: string;
}

interface IElysiaRegisterData {
  accessToken: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  refreshToken: string;
  role: "admin" | "user";
  username: string;
}

const label = "Register";

export const POSTRegister = async (payload: IRegisterPayload): Promise<ISuccessResponse<IAuthResponse>> => {
  const res = await postApi<IElysiaRegisterData>({
    auth: false,
    data: payload,
    endpoint: "/auth/register",
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
