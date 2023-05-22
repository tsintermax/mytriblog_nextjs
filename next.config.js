/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/mytriblog_nextjs" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
