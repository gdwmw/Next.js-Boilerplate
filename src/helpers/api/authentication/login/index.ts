import { IAuthResponse, IAuthSchema } from "..";
import { postApi } from "../../base";
import { GETDataByDocumentId, IDataResponse } from "../../data";
import { GETUserByDocumentId } from "../../user";

export interface ILoginPayload {
  identifier: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("Please check your environment variables. NEXT_PUBLIC_BASE_API_URL is not defined.");
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

  const userResponse = await GETUserByDocumentId(authResponse.user.id, { populate: "relation_data" });
  const dataResponse = await GETDataByDocumentId(userResponse.relation_data?.documentId ?? "", { populate: "*" });

  return rearrange(authResponse, dataResponse);
};
