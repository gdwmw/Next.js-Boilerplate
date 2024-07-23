import { getAllSession } from "@/src/hooks";
import { IAuthSchema, IPasswordPayload, IPasswordResponse } from "@/src/types";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

const rearrange = (response: IAuthSchema): IPasswordResponse => ({
  datasDocumentId: response.user.datasDocumentId ?? "",
  email: response.user.email,
  id: response.user.id,
  token: response.jwt,
  username: response.user.username,
});

export const POSTChangePassword = async (payload: IPasswordPayload): Promise<IPasswordResponse> => {
  try {
    const session = await getAllSession();

    const res = await fetch(`${API_URL}/api/auth/change-password?populate=*`, {
      body: JSON.stringify({ ...payload }),
      headers: {
        Authorization: `Bearer ${session?.user?.token ?? ""}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to post: Change Password with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
