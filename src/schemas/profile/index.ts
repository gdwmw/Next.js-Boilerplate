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

export const ProfileSchema = z.object({
  email: z.string().email({ message: errorMessage.string.email("Email") }),
  image: z
    .any()
    .refine((files) => files instanceof FileList, "Invalid file list")
    .refine((files) => files.length <= 1, "Maximum 1 files")
    .refine((files) => Array.from(files).every((file) => file.size <= 5 * 1024 * 1024), "Maximum file size 5 MB")
    .optional(),
  name: z.string().min(3, { message: errorMessage.string.min("Name", 3) }),
  phoneNumber: z.string().min(10, { message: errorMessage.string.min("Phone", 10) }),
  username: z.string().min(4, { message: errorMessage.string.min("Username", 4) }),
});

export type TProfileSchema = z.infer<typeof ProfileSchema>;
