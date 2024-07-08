/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN:
      process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN,
    NEXT_PUBLIC_MEASUREMENT_ID: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  },
  images: {
    domains: ["i.scdn.co"],
  },
};

export default nextConfig;
