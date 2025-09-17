import { IAuthResponse, IAuthSchema, IDataResponse, ILoginPayload } from "@/src/types";

import { GETDataByDocumentId, GETUserByDocumentId } from "../..";
import { postApi } from "../../base";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

const rearrange = (authResponse: IAuthSchema, dataResponse: IDataResponse): IAuthResponse => ({
  blocked: authResponse.user.blocked,
  confirmed: authResponse.user.confirmed,
  dataDocumentId: dataResponse.documentId ?? "",
  dataId: dataResponse.id.toString(),
  email: authResponse.user.email,
  id: authResponse.user.id.toString(),
  image: dataResponse.image ? API_URL + dataResponse.image.url : null,
  imageId: dataResponse.image?.id.toString() ?? null,
  name: dataResponse.name,
  phoneNumber: dataResponse.phoneNumber,
  role: dataResponse.role,
  status: "authenticated",
  token: authResponse.jwt,
  username: authResponse.user.username,
});

const label = "Login";

export const POSTLogin = async (payload: ILoginPayload): Promise<IAuthResponse> => {
  const authResponse = await postApi<IAuthSchema>({ data: payload, endpoint: "/api/auth/local", label: label });

  const userResponse = await GETUserByDocumentId(authResponse.user.id);
  const dataResponse = await GETDataByDocumentId(userResponse.relation_data?.documentId ?? "");

  return rearrange(authResponse, dataResponse);
};
