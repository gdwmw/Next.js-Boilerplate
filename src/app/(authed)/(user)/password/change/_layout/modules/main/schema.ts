import { z } from "zod";

import { schemaMessage } from "@/src/constants";

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: schemaMessage.string.required("Current password") }),
  password: z
    .string()
    .min(8, { message: schemaMessage.string.min("New password", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password must have at least 1 uppercase letter" })
    .regex(/^(?=.*\d)/, { message: "Password must have at least 1 number" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must have at least 1 symbol (!@#$%^&*)" }),
  passwordConfirmation: z.string().min(1, { message: schemaMessage.string.required("Confirm password") }),
});

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
