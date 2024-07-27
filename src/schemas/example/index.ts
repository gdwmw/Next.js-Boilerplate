import { z } from "zod";

/* eslint-disable perfectionist/sort-objects */
const errorMessage = {
  string: {
    min: (object: string, min: number) => `Please enter ${object} minimum ${min} characters`,
    max: (object: string, max: number) => `${object} maximum ${max} characters`,
    required: (object: string) => `Please enter ${object}`,
  },
  number: {
    min: (object: string, min: number) => `${object} minimum ${min}`,
    max: (object: string, max: number) => `${object} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */

// -----------------------------------------------------------------------------

export const ExampleLoginSchema = z.object({
  password: z.string().min(1, { message: errorMessage.string.required("Password") }),
  username: z.string().min(1, { message: errorMessage.string.required("Username") }),
});

export type TExampleLoginSchema = z.infer<typeof ExampleLoginSchema>;

// -----------------------------------------------------------------------------

const ExampleTitleSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(2, { message: errorMessage.string.min("Title", 2) })
    .max(20, { message: errorMessage.string.max("Title", 20) }),
});

// -----------------------------------------------------------------------------

export const ExampleAboutSchema = z.object({
  data: z.object({
    description: z
      .string()
      .min(100, { message: errorMessage.string.min("Description", 100) })
      .max(1000, { message: errorMessage.string.max("Description", 1000) }),
    id: z.string(),
    logoURL: z.string().min(1, { message: errorMessage.string.required("Logo URL") }),
    note: z
      .string()
      .min(20, { message: errorMessage.string.min("Note", 20) })
      .max(100, { message: errorMessage.string.max("Note", 100) }),
    subTitle: z
      .string()
      .min(8, { message: errorMessage.string.min("Sub Title", 8) })
      .max(32, { message: errorMessage.string.max("Sub Title", 32) }),
  }),
  title: ExampleTitleSchema,
});

export type TExampleAboutSchema = z.infer<typeof ExampleAboutSchema>;
