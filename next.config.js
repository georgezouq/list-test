const withLess = require("next-with-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withLess(nextConfig)
