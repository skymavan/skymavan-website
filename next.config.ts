import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const derivedRepositoryPath =
  process.env.GITHUB_ACTIONS === "true" &&
  process.env.PAGES_CUSTOM_DOMAIN !== "true" &&
  repository &&
  !repository.endsWith(".github.io")
    ? `/${repository}`
    : "";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const basePath = configuredBasePath || derivedRepositoryPath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  devIndicators: false,
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
