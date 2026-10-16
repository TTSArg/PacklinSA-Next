import type { MetadataRoute } from "next";
import { isPreviewDeployment, siteUrl } from "./site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isPreviewDeployment ? undefined : "/",
      disallow: isPreviewDeployment ? "/" : undefined,
    },
    sitemap: isPreviewDeployment
      ? undefined
      : new URL("/sitemap.xml", siteUrl).toString(),
  };
}