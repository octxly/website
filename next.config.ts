import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'picsum.photos'}
        ],
        unoptimized: true
    },
    output: "export",
    trailingSlash: true
};

export default nextConfig;
