import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";
import "./premium.css";
import "./visual-media.css";
import "./aurora-sections.css";
import "./mobile-polish.css";
import { site } from "@/lib/site";

const productionUrl = "https://sitedrminamazandarani.ir";

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
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
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: productionUrl,
    siteName: site.name,
    title: site.name,
    description: site.description
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description
  },
  formatDetection: { telephone: false, address: false, email: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
