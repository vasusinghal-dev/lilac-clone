import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/content/v1/**",
      },
      {
        protocol: "https",
        hostname: "app.squarespacescheduling.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
