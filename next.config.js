/** @type {import('next').NextConfig} */
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;
