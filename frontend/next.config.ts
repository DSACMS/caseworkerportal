import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbopackUseSystemTlsCerts: true, // fixes your Google Fonts TLS issue
  },
};

export default nextConfig;
