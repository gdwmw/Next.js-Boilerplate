import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "/**",
        port: "1337",
        protocol: "http",
        search: "",
      },
    ],
  },
};

export default nextConfig;
