/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bit.ly','media.discordapp.net'],
  },

}

module.exports = nextConfig
