import type { IAuthSchema, IPasswordPayload } from "@/src/types";

import { getAllSession } from "@/src/hooks";

import { postApi } from "../base";

const label = "Change Password";

export const POSTChangePassword = async (payload: IPasswordPayload): Promise<IAuthSchema> => {
  const session = await getAllSession();
  return postApi<IAuthSchema>({
    data: payload,
    endpoint: "/api/auth/change-password",
    headers: {
      Authorization: `Bearer ${session?.user?.token ?? ""}`,
    },
    label: label,
  });
};
