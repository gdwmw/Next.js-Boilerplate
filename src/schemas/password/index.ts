import { z } from "zod";

import { schemaErrorMessage } from "../schema-error-message";

// ----------------------------

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: schemaErrorMessage.string.required("Current Password") }),
  password: z
    .string()
    .min(8, { message: schemaErrorMessage.string.min("Password", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password must have at least 1 uppercase letter" })
    .regex(/^(?=.*\d)/, { message: "Password must have at least 1 number" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must have at least 1 symbol (!@#$%^&*)" }),
  passwordConfirmation: z.string().min(1, { message: schemaErrorMessage.string.required("Confirm Password") }),
});

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
