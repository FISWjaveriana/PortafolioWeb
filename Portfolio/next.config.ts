import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/PortafolioWeb' : '',
  assetPrefix: isProd ? '/PortafolioWeb/' : '',
  // Add other configurations here if necessary
};

export default nextConfig;
