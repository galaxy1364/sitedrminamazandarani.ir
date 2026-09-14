import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReservationForm } from "@/components/ReservationForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SpatialClinicalPlatform } from "@/components/SpatialClinicalPlatform";
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
            <div className="eyebrow">Next-generation Oral & Maxillofacial Care</div>
            <h1 id="hero-title">نسل بعدی دندانپزشکی دیجیتال؛<br /><span>آرام‌تر، دقیق‌تر، شخصی‌سازی‌شده‌تر.</span></h1>
            <p>تجربه‌ای مدرن برای شناخت خدمات، طراحی مسیر درمان و آماده‌سازی مراجعه؛ تصمیم پزشکی نهایی فقط پس از ارزیابی بالینی انجام می‌شود.</p>
            <div className="hero-actions">
              <a className="primary" href="#appointment">درخواست نوبت</a>
              <a className="ghost" href="#smile-simulator">ورود به 3D Smile Lab</a>
            </div>
            <div className="trust-row" aria-label="اصول تجربه بیمار">
              <span>✓ Doctor-led clinical decisions</span>
              <span>✓ Privacy-first architecture</span>
              <span>✓ Concept imagery clearly disclosed</span>
              <span>✓ Mobile & accessibility oriented</span>
            </div>
            <div className="hero-proof-grid" aria-label="اصول اعتماد">
              <div><strong>Verified</strong><span>فقط ادعاهای قابل راستی‌آزمایی</span></div>
              <div><strong>Private</strong><span>عدم دریافت داده سلامت در نسخه فعلی</span></div>
              <div><strong>Doctor-led</strong><span>AI جایگزین پزشک نیست</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="تصویر مفهومی درمان دیجیتال">
            <Image
              className="hero-media"
              src="/visuals/hero-implant.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="hero-media-overlay" aria-hidden="true" />
            <span className="concept-disclosure hero-disclosure">Concept · not a patient result</span>
            <div className="floating-card card-a"><b>3D Treatment Planning</b><span>نمایش مفهومی مسیر درمان</span></div>
            <div className="floating-card card-b"><b>Digital Smile Experience</b><span>طراحی رابط برای گفت‌وگوی بهتر</span></div>
            <div className="floating-card card-c"><b>Doctor-led</b><span>تصمیم بالینی فقط با پزشک</span></div>
          </div>
        </section>

        <section className="principles-strip" aria-label="اصول درمان">
          <div><strong>شفافیت</strong><span>توضیح قابل فهم مراحل</span></div>
          <div><strong>دقت</strong><span>ارزیابی پیش از تصمیم درمانی</span></div>
          <div><strong>پیگیری</strong><span>مسیر مشخص پس از درمان</span></div>
          <div><strong>حریم خصوصی</strong><span>فعال‌سازی داده فقط پس از زیرساخت رسمی</span></div>
        </section>

        <section id="services" className="section-pad services-section premium-services" aria-labelledby="services-title">
          <div className="section-head">
            <div><span className="eyebrow">Clinical Services</span><h2 id="services-title">خدمات تخصصی با مسیر درمان قابل‌فهم</h2></div>
            <p>هر خدمت برای آموزش بیمار، نمایش مرحله‌ای و اتصال آینده به workflow واقعی کلینیک طراحی شده است؛ بدون وعده نتیجه ثابت برای همه.</p>
          </div>
          <div className="service-grid service-grid-six">
            {services.map((service, index) => (
              <article className="service-card premium-service-card" key={service.title}>
                <div className="service-card-top"><span className="service-index">{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true">{service.icon}</i></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="/services">جزئیات خدمت <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
          <Link className="ghost inline-action" href="/services">مشاهده همه خدمات</Link>
        </section>

        <SpatialClinicalPlatform />

        <VisualExperienceHub />

        <div id="studio"><TreatmentStudio /></div>

        <section id="journey" className="section-pad journey-section" aria-labelledby="journey-title">
          <div className="section-head">
            <div><span className="eyebrow">Care Journey</span><h2 id="journey-title">از ارزیابی تا پیگیری درمان</h2></div>
            <p>این مسیر یک چارچوب عمومی برای آشنایی بیمار است و بر اساس شرایط بالینی هر فرد می‌تواند تغییر کند.</p>
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
            <Link className="ghost inline-action" href="/services">آشنایی با خدمات</Link>
          </div>
        </section>

        <section className="ai-section section-pad" aria-labelledby="digital-guide-title">
          <div className="ai-visual-card premium-ai-card">
            <div className="ai-pulse" aria-hidden="true" />
            <div className="ai-orbit orbit-one" aria-hidden="true" />
            <div className="ai-orbit orbit-two" aria-hidden="true" />
            <span className="eyebrow">Digital Care Guide</span>
            <h2 id="digital-guide-title">راهنمای دیجیتال برای فهم بهتر مسیر درمان</h2>
            <p>این بخش برای توضیح عمومی خدمات، آمادگی مراجعه و هدایت به محتوای آموزشی طراحی شده و جایگزین تشخیص یا تجویز پزشک نیست.</p>
            <div className="ai-capability-grid">
              <div><strong>Education</strong><span>پاسخ‌های عمومی و قابل فهم</span></div>
              <div><strong>Routing</strong><span>هدایت به خدمت مرتبط</span></div>
              <div><strong>Safety</strong><span>بدون تشخیص و تجویز مستقل</span></div>
            </div>
            <div className="integration-banner">گفت‌وگوی هوشمند پس از اتصال منبع دانش تأییدشده و guardrail بالینی فعال خواهد شد.</div>
          </div>
        </section>

        <section id="appointment" className="section-pad appointment-section premium-appointment" aria-labelledby="appointment-title">
          <div className="appointment-copy">
            <span className="eyebrow">Instant Booking Architecture</span>
            <h2 id="appointment-title">رزرو آنلاین فقط وقتی «واقعی» است که سیستم کلینیک آن را تأیید کند</h2>
            <p>تا زمان اتصال تقویم پزشک، OTP و backend رسمی، این وب‌سایت اطلاعات تماس یا توضیحات پزشکی بیمار را دریافت نمی‌کند.</p>
            <div className="appointment-notes">
              <span>۱. شناخت خدمت و آماده‌سازی مراجعه</span>
              <span>۲. اتصال آینده به schedule و OTP رسمی</span>
              <span>۳. تأیید نوبت فقط پس از پاسخ سامانه کلینیک</span>
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
            <h2>یک تجربه دیجیتال لوکس، با مرز روشن بین طراحی و پزشکی واقعی</h2>
            <p>اطلاعات رسمی تماس، عکس واقعی پزشک و کلینیک، گواهی‌ها، قیمت‌ها و سرویس‌های متصل پس از دریافت مستندات واقعی در همین معماری فعال می‌شوند.</p>
          </div>
          <Link className="primary" href="/contact">اطلاعات مراجعه</Link>
        </section>

        <SiteFooter />
      </div>

      <nav className="mobile-dock" aria-label="دسترسی سریع موبایل">
        <Link href="/services">خدمات</Link>
        <a className="mobile-dock-main" href="#appointment">درخواست نوبت</a>
        <a href="#smile-simulator">3D Lab</a>
      </nav>
    </main>
  );
}
