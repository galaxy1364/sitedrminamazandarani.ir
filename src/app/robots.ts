import type { MetadataRoute } from "next";
import { canonicalDomainConfigured, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    ...(canonicalDomainConfigured ? { host: siteUrl } : {})
  };
}
