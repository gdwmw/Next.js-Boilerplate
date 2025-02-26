import { IAuthResponse, IAuthSchema, IDatasResponse, ILoginPayload } from "@/src/types";

import { GETDatasByDocumentId } from "../../datas";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface IRearrange extends IAuthSchema, IDatasResponse {}

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

export const POSTLogin = async (payload: ILoginPayload): Promise<IAuthResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/auth/local?populate=*`, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to post: Login with status ${res.status} || ${response.error.message}`);
    }

    const datasResponse = await GETDatasByDocumentId(response.user.datasDocumentId);

    const result: IRearrange = {
      ...response,
      ...datasResponse,
    };

    return rearrange(result);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
