import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Forzamos webpack para evitar líos con Turbopack en el server
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
