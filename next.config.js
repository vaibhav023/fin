/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      mdxRs: true,
      serverComponentsExternalPackages: ["postgres"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*",
        },
        {
          protocol: "http",
          hostname: "*",
        },
      ],
    },
  };
  
  module.exports = nextConfig;