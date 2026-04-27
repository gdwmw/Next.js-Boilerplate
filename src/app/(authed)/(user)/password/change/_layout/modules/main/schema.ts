import { z } from "zod";

import { schemaMessage } from "@/src/constants";

export const ChangePasswordSchema = z.object({
  confirmPassword: z.string().min(1, { message: schemaMessage.string.required("Confirm password") }),
  newPassword: z
    .string()
    .min(8, { message: schemaMessage.string.min("New password", 8) })
    .max(72, { message: schemaMessage.string.max("New password", 72) })
    .regex(/^(?=.*[A-Z])/, { message: "Password must have at least 1 uppercase letter" })
    .regex(/^(?=.*\d)/, { message: "Password must have at least 1 number" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must have at least 1 symbol (!@#$%^&*)" }),
  oldPassword: z.string().min(1, { message: schemaMessage.string.required("Current password") }),
});

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
