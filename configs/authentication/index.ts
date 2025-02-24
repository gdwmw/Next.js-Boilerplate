import type { NextAuthOptions, Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

// import { POSTLogin } from "@/src/utils";
import { ACCOUNT_DATA } from "@/src/libs";
import { ILoginPayload } from "@/src/types";

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

        try {
          const { identifier, password } = credentials as ILoginPayload;

          // const res = await POSTLogin({ identifier, password });

          const res = ACCOUNT_DATA.find((user) => (user.username === identifier || user.email === identifier) && user.password === password);

          if (!res) {
            return null;
          }

          // const mapDataToResponse: User = {
          //   ...res,
          //   id: res.id.toString(),
          // };

          const mapDataToResponse: User = {
            ...res.response,
            id: res.response.id.toString(),
          };

          return mapDataToResponse;
        } catch {
          return null;
        }
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
