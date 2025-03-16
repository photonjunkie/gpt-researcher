/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/gptresearcher',
  assetPrefix: '/gptresearcher/',
  output: 'standalone',
  trailingSlash: true,
  images: {
    remotePatterns: [
      { hostname: 'www.google.com' },
      { hostname: 'www.google-analytics.com' }
    ],
    unoptimized: true,
  },
};

export default nextConfig;