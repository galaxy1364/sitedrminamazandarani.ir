import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";
import "./premium.css";
import "./visual-media.css";
import "./aurora-sections.css";
import "./mobile-polish.css";
import "./showcase.css";
import { site } from "@/lib/site";
import { canonicalDomainConfigured, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: site.name,
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "دکتر مینا مازندرانی",
    "جراحی دهان فک و صورت",
    "ایمپلنت",
    "دندانپزشکی زیبایی",
    "دندانپزشکی"
  ],
  manifest: "/manifest.webmanifest",
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
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: site.name,
    title: site.name,
    description: site.description
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description
  },
  formatDetection: { telephone: false, address: false, email: false }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      inLanguage: "fa-IR"
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/about#doctor`,
      name: site.doctor,
      jobTitle: site.specialty,
      url: `${siteUrl}/about`
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: site.name,
      url: siteUrl,
      employee: { "@id": `${siteUrl}/about#doctor` }
    }
  ]
};

const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
