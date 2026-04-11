import { IAuthSchema } from "../authentication";
import { postApi } from "../base";

export interface IPasswordPayload {
  code?: string;
  currentPassword?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

const label = "Change Password";

export const POSTChangePassword = async (payload: IPasswordPayload): Promise<IAuthSchema> =>
  postApi<IAuthSchema>({
    data: payload,
    endpoint: "/api/auth/change-password",
    label: label,
  });
