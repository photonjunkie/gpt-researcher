/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/gptresearcher',
  assetPrefix: '/gptresearcher/',
  output: 'standalone',
  images: {
    remotePatterns: [
      { hostname: 'www.google.com' },
      { hostname: 'google-analytics.com' }
    ],
  },
};

export default nextConfig;
