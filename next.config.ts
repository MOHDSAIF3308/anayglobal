import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages / Workers do not run Next's default image optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
