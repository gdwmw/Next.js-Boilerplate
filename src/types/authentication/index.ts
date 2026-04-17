export const ROLE_OPTIONS = ["admin", "demo", "user"] as const;
export type TRole = (typeof ROLE_OPTIONS)[number];
