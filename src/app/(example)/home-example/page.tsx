import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import { Main } from "../../_layout/modules/main/index-example";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Home (Example)",
};

const HomePage: FC = (): ReactElement => <Main />;

export default HomePage;
