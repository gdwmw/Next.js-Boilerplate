import { z } from "zod";

/* eslint-disable perfectionist/sort-objects */
const errorMessage = {
  string: {
    min: (label: string, min: number) => `Please enter ${label} minimum ${min} characters`,
    max: (label: string, max: number) => `${label} maximum ${max} characters`,
    required: (label: string) => `Please enter ${label}`,
    email: (label: string) => `${label} must be a valid email address`,
    url: (label: string) => `${label} must be a valid url`,
    enum: (label: string) => `Please select ${label}`,
  },
  number: {
    min: (label: string, min: number) => `${label} minimum ${min}`,
    max: (label: string, max: number) => `${label} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */

// -----------------------------------------------------------------------------

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: errorMessage.string.required("Current Password") }),
  password: z
    .string()
    .min(8, { message: errorMessage.string.min("Password", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password must have at least 1 uppercase letter" })
    .regex(/^(?=.*\d)/, { message: "Password must have at least 1 number" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must have at least 1 symbol (!@#$%^&*)" }),
  passwordConfirmation: z.string().min(1, { message: errorMessage.string.required("Confirm Password") }),
});

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
