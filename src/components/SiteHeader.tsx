import Link from "next/link";
import { site } from "@/lib/site";

type Current = "home" | "services" | "about" | "articles" | "contact";

export function SiteHeader({ current = "home" }: { current?: Current }) {
  return (
    <header className="nav-shell site-header">
      <Link className="brand" href="/" aria-label="صفحه اصلی دندانپزشکی دکتر مینا مازندرانی">
        <span className="brand-mark" aria-hidden="true">M</span>
        <span>{site.doctor}<small>{site.specialty}</small></span>
      </Link>
      <nav aria-label="منوی اصلی">
        <Link href="/services" aria-current={current === "services" ? "page" : undefined}>خدمات</Link>
        <Link href="/about" aria-current={current === "about" ? "page" : undefined}>درباره</Link>
        <Link href="/articles" aria-current={current === "articles" ? "page" : undefined}>آموزش</Link>
        <Link href="/contact" aria-current={current === "contact" ? "page" : undefined}>تماس</Link>
      </nav>
      <Link className="nav-cta" href="/#appointment">درخواست نوبت</Link>
    </header>
  );
}
