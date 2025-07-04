import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // ✅ autorise toutes les images Unsplash
      },
    ],
  },
};

export default nextConfig;
