/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    //see https://styled-components.com/doces/tooling#babel-plugin for more info on the options
    styledComponents: true,
  },
}

module.exports = nextConfig
