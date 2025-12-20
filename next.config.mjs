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

  env: {
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID:
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN:
      process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN,
    NEXT_PUBLIC_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
