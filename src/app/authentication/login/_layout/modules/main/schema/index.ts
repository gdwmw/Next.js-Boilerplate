import { z } from "zod";

import { schemaErrorMessage as errorMessage } from "@/src/constants";

export const LoginSchema = (label: string) =>
  z.object({
    identifier:
      label === "Email"
        ? z.email({ message: errorMessage.string.email(label) })
        : z.string().min(1, { message: errorMessage.string.required(label) }),
    password: z.string().min(1, { message: errorMessage.string.required("Password") }),
  });

export type TLoginSchema = z.infer<ReturnType<typeof LoginSchema>>;
