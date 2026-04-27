import { ISuccessResponse, postApi } from "../base";

export interface ILogoutPayload {
  refreshToken: string;
}

const label = "Logout";

export const POSTLogout = async (payload: ILogoutPayload): Promise<ISuccessResponse<null>> =>
  postApi<null>({
    data: payload,
    endpoint: "/auth/logout",
    label,
  });
