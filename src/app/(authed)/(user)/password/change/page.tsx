import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import ChangePasswordLayout from "@/src/layouts/password/pages/change";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Change Password",
};

const ChangePasswordPage: FC = (): ReactElement => <ChangePasswordLayout />;

export default ChangePasswordPage;
