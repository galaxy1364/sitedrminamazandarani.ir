import type { Metadata } from "next";
import Link from "next/link";
import { ConceptVisual } from "@/components/ConceptVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "تماس و مراجعه",
  "اطلاعات مراجعه فقط پس از تأیید رسمی نشانی، تلفن و ساعات کاری کلینیک منتشر می‌شود.",
  "/contact"
);

export default function ContactPage() {
  return (
    <main className="showcase-page">
      <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <SiteHeader current="contact" />

      <div id="main-content">
        <section className="showcase-hero" aria-labelledby="contact-title">
          <div className="showcase-hero-copy">
            <span className="eyebrow">Contact & Visit</span>
            <h1 id="contact-title">اطلاعات مراجعه، فقط بر پایه داده رسمی</h1>
            <p>این صفحه عمداً هیچ شماره، نشانی، ساعت کاری یا لینک مسیریابی حدسی نمایش نمی‌دهد. با دریافت اطلاعات رسمی کلینیک، همان داده‌ها در همین مسیر منتشر می‌شوند.</p>
          </div>
          <ConceptVisual src="/visuals/clinic-interior.webp" alt="تصویر مفهومی فضای کلینیک" position="center" priority />
        </section>

        <section className="content-shell" aria-label="وضعیت اطلاعات تماس">
          <div className="contact-grid">
            <article className="contact-card"><strong>نشانی کلینیک</strong><p>هنوز اطلاعات رسمی تأییدشده در سورس پروژه ثبت نشده است.</p></article>
            <article className="contact-card"><strong>تلفن و ساعات کاری</strong><p>هنوز شماره تماس و ساعات کاری تأییدشده در سورس پروژه ثبت نشده است.</p></article>
          </div>
        </section>

        <section className="concept-grid" aria-label="دسترسی به محتوای واقعی سایت">
          <article className="concept-card visual-ai">
            <span className="eyebrow">Patient Guide</span>
            <h2>آمادگی پیش از مراجعه</h2>
            <p>برای پرسش‌های عمومی و آشنایی با مسیر درمان، مرکز آموزش را ببینید.</p>
            <Link href="/articles">مرکز آموزش</Link>
          </article>
          <article className="concept-card visual-implant">
            <span className="eyebrow">Clinical Journey</span>
            <h2>شناخت خدمت پیش از مراجعه</h2>
            <p>برای آشنایی اولیه با حوزه‌های درمان، صفحه خدمات را بررسی کنید.</p>
            <Link href="/services">خدمات تخصصی</Link>
          </article>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
