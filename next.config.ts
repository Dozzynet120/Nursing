import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint from blocking deploys
  },

  images: {
    unoptimized: true, // ✅ Ensures images in /public load on Vercel
  },
};

export default nextConfig;
