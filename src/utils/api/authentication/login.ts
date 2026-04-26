import { IAuthResponse } from "..";
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

  const user = res.data;

  return {
    data: {
      accessToken: user.accessToken,
      email: user.email,
      id: user.id.toString(),
      image: null,
      imageId: null,
      name: user.name,
      phone: user.phone,
      refreshToken: user.refreshToken,
      role: user.role,
      status: "authenticated",
      username: user.username,
    },
    message: res.message,
    success: true,
  };
};
