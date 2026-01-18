import type { IAuthSchema, IPasswordPayload } from "@/src/types";

import { postApi } from "../base";

const label = "Change Password";

export const POSTChangePassword = async (payload: IPasswordPayload): Promise<IAuthSchema> =>
  postApi<IAuthSchema>({
    data: payload,
    endpoint: "/api/auth/change-password",
    label: label,
  });
