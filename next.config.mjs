import { withContentlayer } from "next-contentlayer";
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config, options) => {
    config.cache = false;
    return config;
  },
};

export default withPlaiceholder(withContentlayer(nextConfig));
