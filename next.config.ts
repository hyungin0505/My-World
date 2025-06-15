/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/My-World',
  assetPrefix: '/My-World/',
  images: { unoptimized: true },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;