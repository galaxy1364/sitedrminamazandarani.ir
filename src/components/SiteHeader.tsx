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
        <details className="nav-services-menu">
          <summary>خدمات</summary>
          <div className="nav-services-panel">
            <Link href="/services" aria-current={current === "services" ? "page" : undefined}>همه خدمات تخصصی</Link>
            <Link href="/#smile-simulator">مدل تعاملی درمان</Link>
            <Link href="/#gallery">مقایسه تصویری مفهومی</Link>
            <Link href="/#smart-care">راهنمای دیجیتال</Link>
          </div>
        </details>
        <Link className="nav-priority" href="/#smile-simulator">Smile Lab</Link>
        <Link className="nav-priority" href="/#gallery">Visual Compare</Link>
        <Link className="nav-secondary" href="/about" aria-current={current === "about" ? "page" : undefined}>پزشک</Link>
        <Link className="nav-secondary" href="/#patient-portal">پرتال بیمار</Link>
        <Link className="nav-secondary" href="/#finance">هزینه و اقساط</Link>
        <Link className="nav-secondary" href="/articles" aria-current={current === "articles" ? "page" : undefined}>آموزش</Link>
      </nav>

      <div className="world-nav-tools" aria-label="ابزارهای سایت">
        <span className="utility-status" aria-label="زبان فعلی فارسی؛ انگلیسی و عربی هنوز فعال نیستند">
          <b>FA</b><span aria-hidden="true">EN · AR</span>
        </span>
        <span className="utility-status" aria-label="واحد مرجع نمایش فعلی تومان؛ واحدهای دیگر فقط در ابزار محاسبه قابل انتخاب‌اند">
          <b>تومان</b>
        </span>
        <Link className="world-triage" href="/#smart-care">راهنمای فوریت</Link>
        <Link className="nav-cta" href="/#appointment">درخواست نوبت</Link>
      </div>
    </header>
  );
}
