import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",  // Allows all paths from Unsplash
      },
      // Add any other image hosts you need (e.g., Dulux's CDN)
      {
        protocol: "https",
        hostname: "www.dulux.co.za",
        port: "",
        pathname: "/**",
      },
    ],
    // Optional: Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Optional: Enable modern image formats
    formats: ["image/avif", "image/webp"],
  },
  // ... your other config
};

export default nextConfig;