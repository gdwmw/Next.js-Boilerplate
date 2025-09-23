import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import { Main } from "../layouts/home/modules/main/index-example";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  description: "Boilerplate by Gede Dewo Wahyu M.W",
  keywords: ["Boilerplate"],
  openGraph: {
    description: "Boilerplate by Gede Dewo Wahyu M.W",
    images: [
      {
        alt: "Next.js",
        height: 800,
        url: "https://website-name.com/assets/images/logos/logo-name.png", // Must be an absolute URL and PNG format
        width: 800,
      },
    ],
    locale: "en_US",
    siteName: "Next.js",
    title: "Next.js | Home",
    type: "website",
    url: "https://website-name.com/",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      noimageindex: false,
    },
    index: true,
    nocache: false,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@gdwmw",
    description: "Boilerplate by Gede Dewo Wahyu M.W",
    images: ["https://website-name.com/assets/images/logos/logo-name.png"], // Must be an absolute URL and PNG format
    title: "Next.js | Home",
  },
};

const HomePage: FC = (): ReactElement => <Main />;

export default HomePage;
