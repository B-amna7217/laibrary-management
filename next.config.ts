// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable lightningcss to avoid missing module issue on Vercel
    optimizeCss: false,
  },
};

export default nextConfig;
