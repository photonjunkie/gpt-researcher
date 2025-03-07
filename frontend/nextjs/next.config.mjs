/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/gptresearcher',
  assetPrefix: '/gptresearcher/',
  images: {
    remotePatterns: [
      { hostname: 'www.google.com' },
      { hostname: 'www.google-analytics.com' }
    ],
  },
};

export default nextConfig;
