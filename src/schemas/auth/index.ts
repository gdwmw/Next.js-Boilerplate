import { z } from "zod";

/* eslint-disable perfectionist/sort-objects */
const errorMessage = {
  string: {
    min: (label: string, min: number) => `Please enter ${label} minimum ${min} characters`,
    max: (label: string, max: number) => `${label} maximum ${max} characters`,
    email: (label: string) => `${label} must be a valid email address`,
    required: (label: string) => `Please enter ${label}`,
  },
  number: {
    min: (label: string, min: number) => `${label} minimum ${min}`,
    max: (label: string, max: number) => `${label} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */

// -----------------------------------------------------------------------------

export const LoginSchema = (label: string) =>
  z.object({
    identifier:
      label === "Email"
        ? z.string().email({ message: errorMessage.string.email(label) })
        : z.string().min(1, { message: errorMessage.string.required(label) }),
    password: z.string().min(1, { message: errorMessage.string.required("Password") }),
  });

export type TLoginSchema = z.infer<ReturnType<typeof LoginSchema>>;
