/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Prevent build errors due to lint
  },

  images: {
    unoptimized: true, // ✅ Ensures all images from /public load normally in production
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
