import type { Metadata } from "next";
import { site } from "@/lib/site";

const fallbackUrl = "https://sitedrminamazandarani-clinic.vercel.app";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, "");
export const canonicalDomainConfigured = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export function buildMetadata(title: string, description: string, path = "/"): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "fa_IR",
      url: canonical,
      siteName: site.name,
      title,
      description
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: {
      index: canonicalDomainConfigured,
      follow: true,
      googleBot: {
        index: canonicalDomainConfigured,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}
