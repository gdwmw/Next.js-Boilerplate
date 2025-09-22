import type { NextAuthOptions, Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { DUMMY_ACCOUNT_DATA } from "@/src/libs";
// import { deleteCookie, setCookie } from "@/src/utils";
// import { DEMO_ACCOUNT_DATA } from "@/src/libs";
import { ILoginPayload } from "@/src/types";
// import { POSTLogin } from "@/src/utils";

export const options: NextAuthOptions = {
  callbacks: {
    async jwt({ session, token, trigger, user }: { session?: Session; token: JWT; trigger?: "signIn" | "signUp" | "update"; user: User }) {
      if (trigger === "update" && session?.user) {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = { ...session.user, ...token };
      return session;
    },
  },

  pages: {
    signIn: "/authentication/login",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials: Record<never, string> | undefined): Promise<null | User> {
        if (!credentials) {
          return null;
        }

        const { identifier, password } = credentials as ILoginPayload;

        // if ((identifier === "demo" || identifier === "demo@demo.com") && password === "demo") {
        //   return DEMO_ACCOUNT_DATA;
        // } else {
        //   try {
        //     const res = await POSTLogin({ identifier, password });

        //     if (!res.confirmed || res.blocked) {
        //       await setCookie({ name: "report", value: JSON.stringify([res.confirmed, res.blocked]) });
        //       return null;
        //     }

        //     return res;
        //   } catch {
        //     await deleteCookie("report");
        //     return null;
        //   }
        // }

        const res = DUMMY_ACCOUNT_DATA.find((user) => (user.username === identifier || user.email === identifier) && user.password === password);

        if (!res) {
          return null;
        }

        return res.response;
      },
      credentials: {},
      name: "Credentials",
    }),
  ],

  session: {
    maxAge: 60 * 60 * 24,
    strategy: "jwt",
  },
};
