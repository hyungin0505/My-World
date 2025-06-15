const isProd = process.env.NODE_ENV === 'production'
const repo = 'My-World'

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
}