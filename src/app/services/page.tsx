import type { Metadata } from "next";
import { ConceptVisual } from "@/components/ConceptVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { services } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "خدمات تخصصی",
  "مرور خدمات تخصصی، مسیرهای درمان و نکات عمومی پیش از ارزیابی پزشک.",
  "/services"
);

export default function ServicesPage() {
  return (
    <main className="showcase-page">
      <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <SiteHeader current="services" />

      <div id="main-content">
        <section className="showcase-hero" aria-labelledby="services-page-title">
          <div className="showcase-hero-copy">
            <span className="eyebrow">Clinical Services</span>
            <h1 id="services-page-title">خدمات تخصصی، با مسیر درمان قابل‌فهم</h1>
            <p>این صفحه برای آشنایی اولیه با حوزه‌های درمانی طراحی شده است؛ انتخاب درمان نهایی فقط پس از معاینه و بررسی شرایط فردی انجام می‌شود.</p>
          </div>
          <ConceptVisual src="/visuals/hero-implant.webp" alt="تصویر مفهومی ایمپلنت" position="68% center" priority />
        </section>

        <section className="content-shell" aria-label="فهرست خدمات">
          <div className="editorial-grid">
            {services.map((item, index) => (
              <article className="editorial-card" key={item.title}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <a href="/#appointment">وضعیت درخواست نوبت <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section id="treatment-story" className="concept-grid" aria-label="آموزش تصویری درمان">
          <article className="concept-card visual-before">
            <span className="eyebrow">Treatment Story</span>
            <h2>نمایش مرحله‌ای درمان</h2>
            <p>این تصویر مفهومی برای توضیح روند کلی درمان است و نتیجه واقعی بیمار را نشان نمی‌دهد.</p>
            <a href="/#experience">مشاهده توضیح درمان</a>
          </article>
          <article className="concept-card visual-ai">
            <span className="eyebrow">Patient Education</span>
            <h2>راهنمای آموزشی بیمار</h2>
            <p>پاسخ‌های عمومی و محتوای آموزشی برای آمادگی بهتر پیش از مراجعه.</p>
            <a href="/articles">مرکز آموزش</a>
          </article>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
