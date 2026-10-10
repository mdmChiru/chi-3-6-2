import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // better-sqlite3 — нативный модуль, не нужно бандлить
  serverExternalPackages: ["better-sqlite3"],
  cacheComponents: true,
  partialPrefetching: true,
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
