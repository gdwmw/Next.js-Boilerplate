import { IExample } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETExample = async (): Promise<IExample[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to get: Example with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const POSTExample = async (payload: IExample): Promise<IExample> => {
  try {
    const res = await fetch(API_URL, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Failed to post: Example with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTExample = async (payload: IExample): Promise<IExample> => {
  try {
    const res = await fetch(`${API_URL}/${payload.id}`, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Example with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const DELETEExample = async (id: string): Promise<IExample> => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete: Example with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
