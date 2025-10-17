/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ prevent build failure from lint errors
  },

  images: {
    unoptimized: true, // ✅ ensures images load from public/ in static or Vercel deployments
  },
};

module.exports = nextConfig;
