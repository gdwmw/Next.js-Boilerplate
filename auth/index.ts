import type { NextAuthOptions, Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { ILoginPayload } from "@/src/types/api";

const USER_DATA = [
  {
    email: "admin@gmail.com",
    password: "admin",
    response: {
      email: "admin@gmail.com",
      id: "1",
      image: "image url",
      name: "Admin",
      role: "admin",
      status: "authenticated",
      token: "123456789",
      username: "admin",
    },
    username: "admin",
  },
  {
    email: "user@gmail.com",
    password: "user",
    response: {
      email: "user@gmail.com",
      id: "2",
      image: "image url",
      name: "User",
      role: "user",
      status: "authenticated",
      token: "987654321",
      username: "user",
    },
    username: "user",
  },
];

export const options: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user = { ...session.user, ...token };
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials: Record<never, string> | undefined): Promise<null | User> {
        if (!credentials) {
          return null;
        }

        try {
          const { identifier, password } = credentials as ILoginPayload;

          // const res = await POSTAuth({ password, identifier });

          const res = USER_DATA.find((user) => (user.username === identifier || user.email === identifier) && user.password === password);

          if (!res) {
            return null;
          }

          return res.response;
        } catch (error) {
          console.log("An error occurred in the authentication process!");
          throw error;
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
