import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import ProfileLayout from "./_layout";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage: FC = (): ReactElement => <ProfileLayout />;

export default ProfilePage;
