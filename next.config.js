const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true, pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] };

module.exports = withContentlayer(nextConfig);
