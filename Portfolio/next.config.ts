import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  // Configure Next.js to use the src directory
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
