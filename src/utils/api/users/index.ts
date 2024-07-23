import { IUsersPayload, IUsersResponse } from "@/src/types";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

const rearrange = (response: IUsersResponse): IUsersResponse => ({
  datasDocumentId: response.datasDocumentId,
  email: response.email,
  id: response.id,
  username: response.username,
});

export const PUTUsers = async (payload: IUsersPayload): Promise<IUsersResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/users/${payload.id}?populate=*`, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to put: Users with status ${res.status} || ${response.error.message}`);
    }

    return rearrange(response);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
