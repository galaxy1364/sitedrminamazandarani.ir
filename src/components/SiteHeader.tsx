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
            <Link href="/#smile-simulator">تجربه تعاملی درمان</Link>
            <Link href="/#gallery">گالری مقایسه‌ای</Link>
            <Link href="/#smart-care">AI و تله‌هلث</Link>
          </div>
        </details>
        <Link className="nav-priority" href="/#smile-simulator">3D Smile Lab</Link>
        <Link className="nav-priority" href="/#gallery">Before / After</Link>
        <Link className="nav-secondary" href="/about" aria-current={current === "about" ? "page" : undefined}>پزشک</Link>
        <Link className="nav-secondary" href="/#patient-portal">پرتال بیمار</Link>
        <Link className="nav-secondary" href="/#finance">هزینه و اقساط</Link>
        <Link className="nav-secondary" href="/articles" aria-current={current === "articles" ? "page" : undefined}>آموزش</Link>
      </nav>

      <div className="world-nav-tools">
        <span className="utility-switch locale" aria-label="وضعیت زبان‌ها"><b>FA</b><span>EN</span><span>AR</span></span>
        <span className="utility-switch currency" aria-label="واحد مالی فعلی"><b>IRR</b><span>AED</span><span>USD</span></span>
        <Link className="world-triage" href="/#smart-care">راهنمای فوریت</Link>
        <Link className="nav-cta" href="/#appointment">درخواست نوبت</Link>
      </div>
    </header>
  );
}
