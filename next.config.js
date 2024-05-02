const { withContentlayer } = require("next-contentlayer");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: false, pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] };

module.exports = withVanillaExtract(withContentlayer(nextConfig));
