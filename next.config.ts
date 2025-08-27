// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // disable LightningCSS
  },
  compiler: {
    removeConsole: false, // optional
  },
};

export default nextConfig;
