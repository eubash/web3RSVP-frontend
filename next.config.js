/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "ipfs.io"],
  },
  env: {
    BASE_API_URL: "https://api.thegraph.com/subgraphs/name/eubash/rsvpapp",
  },
}

module.exports = nextConfig
