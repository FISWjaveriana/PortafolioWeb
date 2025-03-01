import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  // This tells Next.js to look for pages/app in the src directory
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
