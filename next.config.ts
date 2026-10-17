import type { NextConfig } from "next";
import { POSTS } from "./lib/content";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Fewer variants = fewer Vercel image transformations and cache entries.
    // Source photos are at most 1600px wide, so larger breakpoints only duplicate work.
    qualities: [75],
    deviceSizes: [640, 828, 1200, 1600],
    imageSizes: [96, 256, 384],
    minimumCacheTTL: 2678400, // 31 days; static imports are content-hashed anyway
  },
  // The WordPress site served posts at the root (/<slug>/); keep those links and search results working.
  async redirects() {
    return POSTS.map((p) => ({ source: `/${p.slug}`, destination: `/blog/${p.slug}`, permanent: true }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
