/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.artic.edu', 'www.artic.edu'],
  },
};

module.exports = nextConfig;
