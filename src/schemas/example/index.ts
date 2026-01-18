import { z } from "zod";

import { EXAMPLE_PACKAGES_DATA } from "@/src/libs";

import { schemaErrorMessage as errorMessage } from "../schema-error-message";

// ----------------------------

export const ExampleBookingSchema = z.object({
  date: z.string().min(1, { message: errorMessage.string.required("Date") }),
  email: z.email({ message: errorMessage.string.email("Email") }),
  googleMapsLink: z.url({ message: errorMessage.string.url("Google Maps Link") }).refine((url) => url.includes("https://maps.app.goo.gl/"), {
    message: errorMessage.string.url("Google Maps Link"),
  }),
  name: z.string().min(3, { message: errorMessage.string.min("Name", 3) }),
  package: z.enum(EXAMPLE_PACKAGES_DATA.map((dt) => dt.title) as [string, ...string[]], {
    message: errorMessage.string.enum("Package"),
  }),
  phoneNumber: z.string().min(10, { message: errorMessage.string.min("Phone Number", 10) }),
  time: z
    .array(z.string())
    .min(1, { message: errorMessage.string.enum("Time") })
    .or(z.literal(false).transform(() => []))
    .superRefine((val, ctx) => {
      if (Array.isArray(val) && val.length === 0) {
        ctx.addIssue({
          code: "custom",
          message: errorMessage.string.enum("Time"),
        });
      }
    }),
});

export type TExampleBookingSchema = z.infer<typeof ExampleBookingSchema>;
