const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: false, pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] };

module.exports = withContentlayer(nextConfig);
