import { z } from "zod";

import { schemaMessage } from "@/src/constants";

export const RegisterSchema = z.object({
  confirmPassword: z.string().min(1, { message: schemaMessage.string.required("Confirm password") }),
  email: z.email({ message: schemaMessage.string.email("Email") }),
  name: z.string().min(3, { message: schemaMessage.string.min("Name", 3) }),
  password: z
    .string()
    .min(8, { message: schemaMessage.string.min("Password", 8) })
    .max(72, { message: schemaMessage.string.max("Password", 72) })
    .regex(/^(?=.*[A-Z])/, { message: "Password must have at least 1 uppercase letter" })
    .regex(/^(?=.*\d)/, { message: "Password must have at least 1 number" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must have at least 1 symbol (!@#$%^&*)" }),
  phone: z.string().min(10, { message: schemaMessage.string.min("Phone", 10) }),
  username: z.string().min(4, { message: schemaMessage.string.min("Username", 4) }),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
