import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skymavan — Custom AI systems for business-critical operations",
    short_name: siteConfig.name,
    description:
      "Skymavan builds custom AI agents, workflow automation, and AI software for business-critical operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#002B42",
    theme_color: "#002b42",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
