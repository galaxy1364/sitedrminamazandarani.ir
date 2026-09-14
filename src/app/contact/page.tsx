import type { Metadata } from "next";
import { ConceptVisual } from "@/components/ConceptVisual";
import { ReservationForm } from "@/components/ReservationForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "تماس و مراجعه",
  "اطلاعات مراجعه، وضعیت رزرو آنلاین و مسیرهای ارتباطی پس از تأیید رسمی اطلاعات کلینیک.",
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
            <p>نشانی، تلفن، ساعات کاری و مسیر نقشه پس از تأیید نهایی اطلاعات رسمی کلینیک در همین صفحه منتشر می‌شوند.</p>
          </div>
          <ConceptVisual src="/visuals/clinic-interior.webp" alt="تصویر مفهومی فضای کلینیک" position="center" priority />
        </section>

        <section className="content-shell" aria-label="اطلاعات تماس">
          <div className="contact-grid">
            <article className="contact-card"><strong>نشانی کلینیک</strong><p>در انتظار تأیید نهایی اطلاعات رسمی؛ هیچ نشانی حدسی منتشر نمی‌شود.</p></article>
            <article className="contact-card"><strong>تلفن و ساعات کاری</strong><p>پس از تأیید اطلاعات رسمی، شماره تماس و ساعات پاسخ‌گویی در این بخش قرار می‌گیرند.</p></article>
          </div>
        </section>

        <section id="booking" className="appointment-section premium-appointment section-pad" aria-labelledby="booking-title">
          <div className="appointment-copy">
            <span className="eyebrow">Appointment</span>
            <h2 id="booking-title">وضعیت رزرو آنلاین</h2>
            <p>تا زمان اتصال سامانه رسمی، برای حفظ حریم خصوصی هیچ اطلاعات تماس یا توضیح پزشکی از این صفحه دریافت نمی‌شود.</p>
          </div>
          <ReservationForm />
        </section>

        <section className="concept-grid">
          <article className="concept-card visual-ai">
            <span className="eyebrow">Patient Guide</span>
            <h2>آمادگی پیش از مراجعه</h2>
            <p>برای پرسش‌های عمومی و آشنایی با مسیر درمان، مرکز آموزش را ببینید.</p>
            <a href="/articles">مرکز آموزش</a>
          </article>
          <article className="concept-card visual-implant">
            <span className="eyebrow">Clinical Journey</span>
            <h2>شناخت خدمت پیش از مراجعه</h2>
            <p>برای آشنایی اولیه با حوزه‌های درمان، صفحه خدمات را بررسی کنید.</p>
            <a href="/services">خدمات تخصصی</a>
          </article>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
