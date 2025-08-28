import { NextConfig } from "next"

const rawBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_PAGES === "true" ? "/chakra-ui" : "")

const basePath = rawBasePath && !rawBasePath.startsWith("/")
  ? `/${rawBasePath}`
  : rawBasePath

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "@ark-ui/react"],
    externalDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: basePath || undefined,
  basePath: basePath || undefined,
}

export default nextConfig
