import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import { signIn } from "@/root/auth";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage: FC = (): ReactElement => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
