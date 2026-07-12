import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (50% smaller than WebP), fall back to WebP
    formats: ["image/avif", "image/webp"],
    // Breakpoints that match our responsive design
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        // Development: Google AIDA-hosted images from the original design
        // Production: replace with your own CDN / storage domain
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },
};

export default nextConfig;
