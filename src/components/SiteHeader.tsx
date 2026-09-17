import Link from "next/link";
import { site } from "@/lib/site";

type Current = "home" | "services" | "about" | "articles" | "contact";

export function SiteHeader({ current = "home" }: { current?: Current }) {
  return (
    <header className="nav-shell site-header world-nav">
      <Link className="brand" href="/" aria-label="صفحه اصلی دندانپزشکی دکتر مینا مازندرانی">
        <span className="brand-mark" aria-hidden="true">M</span>
        <span>{site.doctor}<small>{site.specialty}</small></span>
      </Link>

      <nav className="world-nav-links" aria-label="منوی اصلی">
        <Link href="/services" aria-current={current === "services" ? "page" : undefined}>خدمات</Link>
        <Link href="/#smile-simulator">نقشه تعاملی درمان</Link>
        <Link href="/#visual-explorer">نمایشگر تصویری</Link>
        <Link href="/about" aria-current={current === "about" ? "page" : undefined}>درباره پزشک</Link>
        <Link href="/articles" aria-current={current === "articles" ? "page" : undefined}>آموزش بیمار</Link>
        <Link href="/contact" aria-current={current === "contact" ? "page" : undefined}>تماس</Link>
      </nav>

      <div className="world-nav-tools">
        <Link className="nav-cta" href="/contact">اطلاعات مراجعه</Link>
      </div>
    </header>
  );
}
