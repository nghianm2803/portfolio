/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portfolio'

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
