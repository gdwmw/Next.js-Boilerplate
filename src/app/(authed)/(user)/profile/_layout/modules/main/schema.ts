import { z } from "zod";

import { schemaMessage } from "@/src/constants";

export const ProfileSchema = z.object({
  email: z.email({ message: schemaMessage.string.email("Email") }),
  image: z
    .any()
    .refine((files) => files instanceof FileList, "Invalid file list")
    .refine((files) => files.length <= 1, "Maximum 1 files")
    .refine((files) => Array.from(files).every((file) => (file as File).size <= 5 * 1024 * 1024), "Maximum file size 5 MB")
    .optional(),
  name: z.string().min(3, { message: schemaMessage.string.min("Name", 3) }),
  phone: z.string().min(10, { message: schemaMessage.string.min("Phone", 10) }),
  username: z.string().min(4, { message: schemaMessage.string.min("Username", 4) }),
});

export type TProfileSchema = z.infer<typeof ProfileSchema>;
