import { z } from "zod";

import { schemaMessage } from "@/src/constants";

export const LoginSchema = (label: string) =>
  z.object({
    identifier:
      label === "Email"
        ? z.email({ message: schemaMessage.string.email(label) })
        : z.string().min(1, { message: schemaMessage.string.required(label) }),
    password: z.string().min(1, { message: schemaMessage.string.required("Password") }),
  });

export type TLoginSchema = z.infer<ReturnType<typeof LoginSchema>>;
