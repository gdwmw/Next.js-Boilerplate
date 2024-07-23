import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import LoginLayout from "@/src/layouts/authentication/pages/login";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage: FC = (): ReactElement => <LoginLayout />;

export default LoginPage;
