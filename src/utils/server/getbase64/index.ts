"use server";

import { getPlaiceholder } from "plaiceholder";

// https://www.youtube.com/watch?v=Bz3No1RFXWY&t=18s

export const getBase64 = async (imageUrl: string) => {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    //console.log(`base64: ${base64}`)

    return base64;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.stack);
    }
  }
};
