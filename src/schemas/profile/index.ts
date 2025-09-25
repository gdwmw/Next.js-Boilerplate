import { z } from "zod";

import { schemaErrorMessage as errorMessage } from "../schema-error-message";

// ----------------------------

export const ProfileSchema = z.object({
  email: z.email({ message: errorMessage.string.email("Email") }),
  image: z
    .any()
    .refine((files) => files instanceof FileList, "Invalid file list")
    .refine((files) => files.length <= 1, "Maximum 1 files")
    .refine((files) => Array.from(files).every((file) => (file as File).size <= 5 * 1024 * 1024), "Maximum file size 5 MB")
    .optional(),
  name: z.string().min(3, { message: errorMessage.string.min("Name", 3) }),
  phoneNumber: z.string().min(10, { message: errorMessage.string.min("Phone", 10) }),
  username: z.string().min(4, { message: errorMessage.string.min("Username", 4) }),
});

export type TProfileSchema = z.infer<typeof ProfileSchema>;
