/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables eslint blocking builds
  },
};

module.exports = nextConfig;
