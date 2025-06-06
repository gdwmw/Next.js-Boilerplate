import NextAuth from "next-auth";

import { options } from "@/configs/authentication";

const handler = NextAuth(options);

export { handler as GET, handler as POST };
