import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
            <div className="eyebrow">Oral & Maxillofacial Care</div>
            <h1 id="hero-title">تجربه دیجیتال دقیق و شفاف؛<br /><span>با تصمیم درمانی پزشک‌محور.</span></h1>
            <p>سایت برای شناخت خدمات، آموزش بیمار و تعامل با ابزارهای واقعی داخل مرورگر طراحی شده است؛ هیچ قابلیت پزشکی یا نوبت‌دهیِ متصل بدون زیرساخت واقعی به‌عنوان فعال نمایش داده نمی‌شود.</p>
            <div className="hero-actions">
              <a className="primary" href="#smile-simulator">نقشه تعاملی درمان</a>
              <Link className="ghost" href="/services">مشاهده خدمات</Link>
            </div>
            <div className="trust-row" aria-label="اصول تجربه بیمار">
              <span>✓ Doctor-led clinical decisions</span>
              <span>✓ Privacy-first interactions</span>
              <span>✓ Concept imagery disclosed</span>
              <span>✓ No fake integrations</span>
            </div>
            <div className="hero-proof-grid" aria-label="اصول اعتماد">
              <div><strong>Verified</strong><span>فقط ادعاهای قابل راستی‌آزمایی</span></div>
              <div><strong>Private</strong><span>عدم دریافت داده سلامت</span></div>
              <div><strong>Functional</strong><span>فقط قابلیت‌های واقعاً فعال</span></div>
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
            <span className="concept-disclosure hero-disclosure">تصویر مفهومی · نتیجه بیمار نیست</span>
            <div className="floating-card card-a"><b>آموزش تعاملی</b><span>ابزار واقعی داخل مرورگر</span></div>
            <div className="floating-card card-b"><b>حریم خصوصی</b><span>بدون ارسال داده سلامت</span></div>
            <div className="floating-card card-c"><b>Doctor-led</b><span>تصمیم بالینی فقط با پزشک</span></div>
          </div>
        </section>

        <section className="principles-strip" aria-label="اصول درمان">
          <div><strong>شفافیت</strong><span>توضیح قابل فهم مراحل</span></div>
          <div><strong>دقت</strong><span>ارزیابی پیش از تصمیم درمانی</span></div>
          <div><strong>پیگیری</strong><span>مسیر مشخص پس از درمان</span></div>
          <div><strong>حریم خصوصی</strong><span>عدم جمع‌آوری داده سلامت در ابزارهای عمومی</span></div>
        </section>

        <section id="services" className="section-pad services-section premium-services" aria-labelledby="services-title">
          <div className="section-head">
            <div><span className="eyebrow">Clinical Services</span><h2 id="services-title">خدمات تخصصی با مسیر درمان قابل‌فهم</h2></div>
            <p>این بخش برای آموزش و شناخت بهتر خدمات است؛ تشخیص و انتخاب درمان پس از معاینه و بررسی شرایط فردی انجام می‌شود.</p>
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
          <div className="clinical-animation" aria-label="نمایش آموزشی مراحل درمان">
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
            <h2>اطلاعات رسمی مراجعه و محتوای بالینی فقط با داده تأییدشده منتشر می‌شوند</h2>
            <p>برای شناخت خدمات، درباره پزشک، آموزش بیمار و اطلاعات مراجعه از بخش‌های اصلی سایت استفاده کنید.</p>
          </div>
          <Link className="primary" href="/contact">اطلاعات مراجعه</Link>
        </section>

        <SiteFooter />
      </div>

      <nav className="mobile-dock" aria-label="دسترسی سریع موبایل">
        <Link href="/services">خدمات</Link>
        <a className="mobile-dock-main" href="#smile-simulator">تعامل درمان</a>
        <Link href="/contact">تماس</Link>
      </nav>
    </main>
  );
}
