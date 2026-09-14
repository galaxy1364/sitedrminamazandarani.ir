import type { Metadata } from "next";
import { ConceptVisual } from "@/components/ConceptVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "درباره پزشک",
  `${site.doctor}، ${site.specialty}. معرفی رویکرد درمانی و اطلاعات حرفه‌ای تأییدشده.`,
  "/about"
);

export default function AboutPage() {
  return (
    <main className="showcase-page">
      <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <SiteHeader current="about" />

      <div id="main-content">
        <section className="showcase-hero" aria-labelledby="about-title">
          <div className="showcase-hero-copy">
            <span className="eyebrow">About the Doctor</span>
            <h1 id="about-title">{site.doctor}</h1>
            <p className="about-specialty">{site.specialty}</p>
            <p>این صفحه فقط اطلاعات حرفه‌ای تأییدشده را منتشر می‌کند و از افزودن سابقه، مدرک، عضویت یا افتخار بدون مستند معتبر خودداری می‌شود.</p>
          </div>
          <ConceptVisual src="/visuals/clinic-interior.webp" alt="تصویر مفهومی فضای درمانی" position="center" priority />
        </section>

        <section className="content-shell">
          <article className="content-panel">
            <span className="eyebrow">Clinical Philosophy</span>
            <h2>شفافیت، ارزیابی دقیق و تصمیم پزشک‌محور</h2>
            <p>محتوای سایت برای توضیح بهتر مسیر درمان و آماده‌سازی بیمار برای مراجعه طراحی شده است؛ تصمیم بالینی فقط پس از معاینه و بررسی اطلاعات لازم انجام می‌شود.</p>
          </article>

          <div className="contact-grid">
            <article className="contact-card"><strong>حوزه تخصصی</strong><p>{site.specialty}</p></article>
            <article className="contact-card"><strong>اطلاع‌رسانی مسئولانه</strong><p>هیچ نتیجه درمان، مدرک حرفه‌ای یا اطلاعات تماس بدون تأیید معتبر منتشر نمی‌شود.</p></article>
          </div>
        </section>

        <section className="concept-grid" aria-label="تجربه درمان و آموزش بیمار">
          <article className="concept-card visual-implant">
            <span className="eyebrow">Treatment Education</span>
            <h2>آشنایی با مسیر درمان</h2>
            <p>برای شناخت حوزه‌های درمان و مراحل عمومی ارزیابی، صفحه خدمات را ببینید.</p>
            <a href="/services">مشاهده خدمات</a>
          </article>
          <article className="concept-card visual-ai">
            <span className="eyebrow">Patient Guide</span>
            <h2>آموزش پیش از مراجعه</h2>
            <p>محتوای عمومی برای پرسش‌های رایج و آمادگی بهتر پیش از مراجعه.</p>
            <a href="/articles">مرکز آموزش</a>
          </article>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
