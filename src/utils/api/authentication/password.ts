import { ISuccessResponse, postApi } from "../base";

export interface IPasswordPayload {
  newPassword: string;
  oldPassword: string;
}

export interface IPasswordResponse {
  createdAt: Date;
  email: string;
  id: number;
  name: string;
  phone: string;
  updatedAt: Date;
  username: string;
}

const label = "Change Password";

export const POSTChangePassword = async (payload: IPasswordPayload): Promise<ISuccessResponse<IPasswordResponse>> =>
  postApi<IPasswordResponse>({
    data: payload,
    endpoint: "/auth/change-password",
    label: label,
  });
