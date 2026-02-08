import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/WhatsMyContributionRoom" : "",
  assetPrefix: isProd ? "/WhatsMyContributionRoom/" : "",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
