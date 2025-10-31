/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },
};

module.exports = nextConfig;
