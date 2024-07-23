import { z } from "zod";

import { EXAMPLE_PACKAGES_DATA } from "@/src/libs/constants";

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

export const ExampleBookingSchema = z.object({
  date: z.string().min(1, { message: errorMessage.string.required("Date") }),
  email: z.string().email({ message: errorMessage.string.email("Email") }),
  googleMapsLink: z
    .string()
    .url({ message: errorMessage.string.url("Google Maps Link") })
    .refine((url) => url.includes("https://maps.app.goo.gl/"), {
      message: errorMessage.string.url("Google Maps Link"),
    }),
  name: z.string().min(3, { message: errorMessage.string.min("Name", 3) }),
  package: z.enum(EXAMPLE_PACKAGES_DATA.map((dt) => dt.title) as [string, ...string[]], {
    errorMap: () => ({ message: errorMessage.string.enum("Package") }),
  }),
  phoneNumber: z.string().min(10, { message: errorMessage.string.min("Phone Number", 10) }),
  time: z
    .array(z.string())
    .min(1, { message: errorMessage.string.enum("Time") })
    .or(z.literal(false).transform(() => []))
    .superRefine((val, ctx) => {
      if (Array.isArray(val) && val.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: errorMessage.string.enum("Time"),
        });
      }
    }),
});

export type TExampleBookingSchema = z.infer<typeof ExampleBookingSchema>;
