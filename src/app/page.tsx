import type { Metadata } from "next";
import Image from "next/image";
import { ReservationForm } from "@/components/ReservationForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TreatmentStudio } from "@/components/TreatmentStudio";
import { VisualExperienceHub } from "@/components/VisualExperienceHub";
import { careJourney, faqs, services, site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata(site.name, site.description, "/"),
  title: { absolute: site.name }
};

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">رفتن به محتوای اصلی</a>
      <SiteHeader current="home" />

      <div id="content">
        <section id="top" className="hero section-pad premium-hero" aria-labelledby="hero-title">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">Oral & Maxillofacial Care</div>
            <h1 id="hero-title">درمان آگاهانه،<br /><span>با توضیح روشن و تصمیم پزشک‌محور.</span></h1>
            <p>{site.description}</p>
            <div className="hero-actions">
              <a className="primary" href="#appointment">درخواست نوبت</a>
              <a className="ghost" href="#studio">آشنایی با مسیر درمان</a>
            </div>
            <div className="trust-row" aria-label="اصول تجربه بیمار">
              <span>✓ تصمیم بالینی با پزشک</span>
              <span>✓ مسیر درمان قابل‌فهم</span>
              <span>✓ محتوای سازگار با موبایل</span>
              <span>✓ عدم دریافت داده پزشکی در نسخه فعلی</span>
            </div>
            <div className="hero-proof-grid" aria-label="اصول طراحی تجربه">
              <div><strong>۰۱</strong><span>ارزیابی تخصصی</span></div>
              <div><strong>۰۲</strong><span>توضیح مرحله‌ای</span></div>
              <div><strong>۰۳</strong><span>پیگیری ساختاریافته</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="تصویر مفهومی ایمپلنت و درمان دیجیتال">
            <Image
              className="hero-media"
              src="/visuals/hero-implant.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="hero-media-overlay" aria-hidden="true" />
            <span className="concept-disclosure hero-disclosure">تصویر مفهومی</span>
            <div className="floating-card card-a"><b>ارزیابی تخصصی</b><span>شروع مسیر با بررسی شرایط فردی</span></div>
            <div className="floating-card card-b"><b>مسیر درمان</b><span>توضیح مرحله‌به‌مرحله گزینه‌ها</span></div>
            <div className="floating-card card-c"><b>پیگیری</b><span>مراقبت پس از درمان طبق نظر پزشک</span></div>
          </div>
        </section>

        <section className="principles-strip" aria-label="اصول درمان">
          <div><strong>شفافیت</strong><span>مراحل درمان قابل فهم</span></div>
          <div><strong>دقت</strong><span>تصمیم‌گیری پس از ارزیابی پزشک</span></div>
          <div><strong>پیگیری</strong><span>مسیر مشخص پس از درمان</span></div>
          <div><strong>حریم خصوصی</strong><span>عدم دریافت داده پزشکی تا فعال‌شدن زیرساخت رسمی</span></div>
        </section>

        <section id="services" className="section-pad services-section premium-services" aria-labelledby="services-title">
          <div className="section-head">
            <div><span className="eyebrow">خدمات تخصصی</span><h2 id="services-title">هر درمان، یک مسیر روشن</h2></div>
            <p>هدف این بخش کمک به شناخت بهتر گزینه‌های درمانی پیش از معاینه است؛ انتخاب نهایی درمان به ارزیابی بالینی وابسته است.</p>
          </div>
          <div className="service-grid service-grid-six">
            {services.map((service, index) => (
              <article className="service-card premium-service-card" key={service.title}>
                <div className="service-card-top"><span className="service-index">{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true">{service.icon}</i></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="/services">جزئیات خدمت <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <a className="ghost inline-action" href="/services">مشاهده همه خدمات</a>
        </section>

        <VisualExperienceHub />

        <div id="studio"><TreatmentStudio /></div>

        <section id="journey" className="section-pad journey-section" aria-labelledby="journey-title">
          <div className="section-head">
            <div><span className="eyebrow">Care Journey</span><h2 id="journey-title">از ارزیابی تا پیگیری درمان</h2></div>
            <p>این مسیر یک چارچوب عمومی برای آشنایی بیمار است و ممکن است بر اساس شرایط بالینی هر فرد تغییر کند.</p>
          </div>
          <div className="journey-grid">
            {careJourney.map((item) => (
              <article className="journey-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-pad split-section premium-split" aria-labelledby="experience-title">
          <div className="clinical-animation" aria-label="تصویر مفهومی مراحل درمان">
            <div className="animation-label">Treatment Story</div>
            <div className="jaw upper" aria-hidden="true"><span /><span /><span /><span /></div>
            <div className="implant-sequence" aria-hidden="true"><b className="implant" /><b className="abutment" /><b className="crown" /></div>
            <div className="jaw lower" aria-hidden="true"><span /><span /><span /><span /></div>
            <div className="animation-legend" aria-hidden="true"><span>Implant</span><span>Abutment</span><span>Crown</span></div>
          </div>
          <div className="experience-copy">
            <span className="eyebrow">Treatment Education</span>
            <h2 id="experience-title">تصویر برای توضیح درمان، نه وعده نتیجه</h2>
            <p>این نمایش صرفاً برای توضیح مفهومی مراحل درمان است و نتیجه واقعی یک بیمار را نشان نمی‌دهد.</p>
            <ul>
              <li>نتایج واقعی فقط با رضایت معتبر بیمار منتشر می‌شوند.</li>
              <li>جزئیات درمان به شرایط فردی و معاینه وابسته است.</li>
              <li>مراقبت‌های پس از درمان طبق دستور پزشک تعیین می‌شوند.</li>
            </ul>
            <a className="ghost inline-action" href="/services">آشنایی با خدمات</a>
          </div>
        </section>

        <section className="ai-section section-pad" aria-labelledby="digital-guide-title">
          <div className="ai-visual-card premium-ai-card">
            <div className="ai-pulse" aria-hidden="true" />
            <div className="ai-orbit orbit-one" aria-hidden="true" />
            <div className="ai-orbit orbit-two" aria-hidden="true" />
            <span className="eyebrow">Digital Care Guide</span>
            <h2 id="digital-guide-title">راهنمای دیجیتال برای فهم بهتر مسیر درمان</h2>
            <p>این بخش برای توضیح عمومی خدمات، آمادگی مراجعه و هدایت به محتوای آموزشی طراحی شده است و هرگز جایگزین تشخیص یا تجویز پزشک نیست.</p>
            <div className="ai-capability-grid">
              <div><strong>آموزش</strong><span>پاسخ‌های عمومی و قابل فهم</span></div>
              <div><strong>هدایت</strong><span>دسترسی سریع به خدمت مرتبط</span></div>
              <div><strong>ایمنی</strong><span>بدون تشخیص و تجویز مستقل</span></div>
            </div>
            <div className="integration-banner">گفت‌وگوی هوشمند فقط پس از اتصال به منبع دانش تأییدشده فعال خواهد شد.</div>
          </div>
        </section>

        <section id="appointment" className="section-pad appointment-section premium-appointment" aria-labelledby="appointment-title">
          <div className="appointment-copy">
            <span className="eyebrow">Appointment</span>
            <h2 id="appointment-title">درخواست نوبت، بدون دریافت زودهنگام اطلاعات بیمار</h2>
            <p>تا زمان فعال‌شدن سامانه رسمی، این وب‌سایت اطلاعات تماس یا توضیحات پزشکی بیمار را دریافت نمی‌کند.</p>
            <div className="appointment-notes">
              <span>۱. ابتدا خدمت موردنظر را بشناسید</span>
              <span>۲. اطلاعات رسمی مراجعه را بررسی کنید</span>
              <span>۳. رزرو آنلاین پس از اتصال سامانه رسمی فعال می‌شود</span>
            </div>
          </div>
          <ReservationForm />
        </section>

        <section id="faq" className="section-pad faq-section" aria-labelledby="faq-title">
          <div className="section-head">
            <div><span className="eyebrow">FAQ</span><h2 id="faq-title">پاسخ‌های شفاف پیش از مراجعه</h2></div>
            <p>این پاسخ‌ها عمومی هستند و جایگزین معاینه یا توصیه اختصاصی پزشک نیستند.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta section-pad premium-final-cta">
          <div>
            <span className="eyebrow">Next Step</span>
            <h2>اطلاعات درمان را روشن و مرحله‌به‌مرحله دنبال کنید</h2>
            <p>برای آشنایی با خدمات، مسیر درمان و اطلاعات مراجعه از بخش‌های تخصصی سایت استفاده کنید.</p>
          </div>
          <a className="primary" href="/contact">اطلاعات مراجعه</a>
        </section>

        <SiteFooter />
      </div>

      <nav className="mobile-dock" aria-label="دسترسی سریع موبایل">
        <a href="/services">خدمات</a>
        <a className="mobile-dock-main" href="#appointment">درخواست نوبت</a>
        <a href="#studio">استودیو</a>
      </nav>
    </main>
  );
}
