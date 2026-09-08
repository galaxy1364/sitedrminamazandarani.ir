import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sitedrminamazandarani.ir/",
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
