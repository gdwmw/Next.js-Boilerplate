"use server";

const API_URL = process.env.AUTH_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface IAuthPayload {
  confirmPassword?: string;
  email?: string;
  name?: string;
  password: string;
  username: string;
}

export interface IAuthResponse {
  email: string;
  id: string;
  image?: null | string;
  name: string;
  role: string;
  token: string;
  username: string;
}

export const POSTAuth = async (data: IAuthPayload): Promise<IAuthResponse> => {
  try {
    const res = await fetch(API_URL, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Failed to post: Auth with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
