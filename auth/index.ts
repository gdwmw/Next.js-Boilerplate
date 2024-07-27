import type { NextAuthOptions, Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { IAuthPayload, IAuthResponse } from "@/src/types/api";

interface IUserData extends IAuthResponse {
  password: string;
}

const USER_DATA: IUserData[] = [
  {
    email: "admin@gmail.com",
    id: "1",
    image: "image url",
    name: "Admin",
    password: "admin",
    role: "admin",
    token: "123456789",
    username: "admin",
  },
  {
    email: "user@gmail.com",
    id: "2",
    image: "image url",
    name: "User",
    password: "user",
    role: "user",
    token: "987654321",
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
      async authorize(credentials: Record<never, string> | undefined): Promise<IAuthResponse | null> {
        if (!credentials) {
          return null;
        }

        try {
          //   const res = await POSTAuth(credentials as IAuthPayload);

          const payload = credentials as IAuthPayload;
          const res = USER_DATA.find((user) => user.username === payload.username && user.password === payload.password);

          if (!res) {
            return null;
          }

          /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
          const { password, ...resWithoutPassword } = res;

          return resWithoutPassword;
        } catch (error) {
          console.error("Authorization:", error);
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
