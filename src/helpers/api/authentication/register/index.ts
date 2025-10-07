import { IAuthResponse, IAuthSchema, IDataPayload, IDataResponse, IRegisterPayload } from "@/src/types";

import { POSTData, PUTUser } from "../..";
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

interface I extends IDataPayload, IRegisterPayload {}

const label = "Register";

export const POSTRegister = async (payload: I): Promise<IAuthResponse> => {
  const authResponse = await postApi<IAuthSchema>({
    data: {
      email: payload.email,
      password: payload.password,
      username: payload.username,
    },
    endpoint: "/api/auth/local/register",
    label: label,
  });

  const dataResponse = await POSTData({
    name: payload.name,
    phoneNumber: payload.phoneNumber,
    role: "user",
  });

  await PUTUser({ id: authResponse.user.id, relation_data: dataResponse.id });

  return rearrange(authResponse, dataResponse);
};
