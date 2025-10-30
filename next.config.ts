import type { NextConfig } from "next";

const nextConfig : NextConfig= {
  images: { unoptimized: true }, // static images load instantly, no Image Optimization queue
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  trailingSlash: true,
}


export default nextConfig;
