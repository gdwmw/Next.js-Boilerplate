import { z } from "zod";

import { schemaErrorMessage as errorMessage } from "../schema-error-message";

// ----------------------------

export const LoginSchema = (label: string) =>
  z.object({
    identifier:
      label === "Email"
        ? z.email({ message: errorMessage.string.email(label) })
        : z.string().min(1, { message: errorMessage.string.required(label) }),
    password: z.string().min(1, { message: errorMessage.string.required("Password") }),
  });

export type TLoginSchema = z.infer<ReturnType<typeof LoginSchema>>;

// ----------------------------

export const RegisterSchema = z.object({
  confirmPassword: z.string().min(1, { message: errorMessage.string.required("Confirm Password") }),
  email: z.email({ message: errorMessage.string.email("Email") }),
  name: z.string().min(3, { message: errorMessage.string.min("Name", 3) }),
  password: z
    .string()
    .min(8, { message: errorMessage.string.min("Password", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password must have at least 1 uppercase letter" })
    .regex(/^(?=.*\d)/, { message: "Password must have at least 1 number" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must have at least 1 symbol (!@#$%^&*)" }),
  phoneNumber: z.string().min(10, { message: errorMessage.string.min("Phone", 10) }),
  username: z.string().min(4, { message: errorMessage.string.min("Username", 4) }),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
