import type { NextAuthOptions, Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { DUMMY_ACCOUNT_DATA } from "@/src/constants";
import { ILoginPayload, POSTLogin } from "@/src/utils";

export const options: NextAuthOptions = {
  callbacks: {
    async jwt({ session, token, trigger, user }: { session?: Session; token: JWT; trigger?: "signIn" | "signUp" | "update"; user: User }) {
      if (trigger === "update" && session?.user) {
        return { ...token, ...session.user };
      }

      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.username = user.username;
        token.phone = user.phone;
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.image = user.image;
        token.imageId = user.imageId;
        token.placeholder = user.placeholder;
        token.status = user.status;
      }

      return token;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        accessToken: token.accessToken as string | undefined,
        email: token.email as null | string | undefined,
        id: token.id as string | undefined,
        image: token.image as null | string | undefined,
        imageId: token.imageId as null | string | undefined,
        name: token.name as null | string | undefined,
        phone: token.phone as string | undefined,
        placeholder: token.placeholder as null | string | undefined,
        refreshToken: token.refreshToken as string | undefined,
        role: token.role as "admin" | "user" | undefined,
        status: token.status as string | undefined,
        username: token.username as string | undefined,
      };
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

        const dummyUser = DUMMY_ACCOUNT_DATA.find(
          (user) => (user.username === identifier || user.email === identifier) && user.password === password,
        );

        if (dummyUser) {
          return dummyUser.response as User;
        }

        try {
          const method = identifier.includes("@") ? "email" : "username";
          const res = await POSTLogin({ identifier, method, password });
          return res.data as User;
        } catch (error) {
          console.error("Login error:", error);
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
