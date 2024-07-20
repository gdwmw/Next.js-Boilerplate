import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { IAuthPayload, IAuthResponse, POSTAuth } from "@/src/utils";

declare module "next-auth" {
  interface Session {
    user: IAuthResponse;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...user,
        },
      };
    },
  },

  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { password, username } = credentials as IAuthPayload;

        const user = await POSTAuth({ password, username });

        if (!user) {
          throw new Error("Invalid username or password");
        }

        return user;
      },

      credentials: {
        password: {},
        username: {},
      },
    }),
  ],
});
