/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["prod-ripcut-delivery.disney-plus.net"],
  },
};

module.exports = nextConfig;
