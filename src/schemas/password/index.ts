import { z } from "zod";

import { schemaErrorMessage as errorMessage } from "../schema-error-message";

// ----------------------------

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: errorMessage.string.required("Current Password") }),
  password: z
    .string()
    .min(8, { message: errorMessage.string.min("New Password", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password must have at least 1 uppercase letter" })
    .regex(/^(?=.*\d)/, { message: "Password must have at least 1 number" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must have at least 1 symbol (!@#$%^&*)" }),
  passwordConfirmation: z.string().min(1, { message: errorMessage.string.required("Confirm Password") }),
});

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
