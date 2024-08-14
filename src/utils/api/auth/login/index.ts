import { IAuthResponse, ILoginPayload } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const POSTLogin = async (data: ILoginPayload): Promise<IAuthResponse> => {
  try {
    const res = await fetch(API_URL, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Failed to post: Login with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
