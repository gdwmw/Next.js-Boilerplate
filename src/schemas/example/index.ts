import { z } from "zod";

/* eslint-disable perfectionist/sort-objects */
const errorMessage = {
  string: {
    min: (label: string, min: number) => `Please enter ${label} minimum ${min} characters`,
    max: (label: string, max: number) => `${label} maximum ${max} characters`,
    required: (label: string) => `Please enter ${label}`,
  },
  number: {
    min: (label: string, min: number) => `${label} minimum ${min}`,
    max: (label: string, max: number) => `${label} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */

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
