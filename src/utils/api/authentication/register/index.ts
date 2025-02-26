import { IAuthResponse, IAuthSchema, IDatasPayload, IDatasResponse, IRegisterPayload } from "@/src/types";

import { POSTDatas } from "../../datas";
import { PUTUsers } from "../../users";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface IRearrange extends IAuthSchema, IDatasResponse {}
interface IPayload extends IDatasPayload, IRegisterPayload {}

const rearrange = (response: IRearrange): IAuthResponse => ({
  datasDocumentId: response.user.datasDocumentId ?? "",
  datasId: response.id.toString(),
  email: response.user.email,
  id: response.user.id.toString(),
  image: response.image?.url ?? null,
  imageId: response.image?.id.toString() ?? null,
  name: response.name,
  phoneNumber: response.phoneNumber,
  role: response.role,
  status: "authenticated",
  token: response.jwt,
  username: response.user.username,
});

export const POSTRegister = async (payload: IPayload): Promise<IAuthResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/auth/local/register?populate=*`, {
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        username: payload.username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to post: Register with status ${res.status} || ${response.error.message}`);
    }

    const datasResponse = await POSTDatas({
      name: payload.name,
      phoneNumber: payload.phoneNumber,
      role: "user",
    });

    const usersResponse = await PUTUsers({ datasDocumentId: datasResponse.documentId, id: response.user.id });

    const result: IRearrange = {
      ...response,
      ...datasResponse,
      user: {
        ...response.user,
        datasDocumentId: usersResponse.datasDocumentId,
      },
    };

    return rearrange(result);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
