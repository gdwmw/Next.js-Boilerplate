import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import RegisterLayout from "@/src/layouts/authentication/pages/register";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage: FC = (): ReactElement => <RegisterLayout />;

export default RegisterPage;
