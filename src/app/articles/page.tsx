import type { Metadata } from "next";
import { ConceptVisual } from "@/components/ConceptVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "آموزش بیمار",
  "راهنمای عمومی برای آشنایی با مسیرهای درمانی، آمادگی مراجعه و مراقبت‌های دندانپزشکی.",
  "/articles"
);

const topics = [
  ["ایمپلنت", "آشنایی عمومی با ارزیابی اولیه، پرسش‌های مهم و مسیر کلی بررسی."],
  ["جراحی دهان و فک", "مفاهیم عمومی درباره ارزیابی، تصویربرداری و مراقبت پس از درمان."],
  ["زیبایی", "مرور اصول طراحی لبخند با تأکید بر تصمیم‌گیری فردمحور."],
  ["روکش و بازسازی", "آشنایی با نقش بازسازی عملکرد و فرم دندان."],
  ["مراقبت پس از درمان", "نکات عمومی درباره پیگیری؛ دستور اختصاصی همیشه توسط پزشک تعیین می‌شود."],
  ["راهنمای مراجعه", "چه اطلاعات و مدارکی ممکن است برای ارزیابی دقیق‌تر مفید باشند."]
] as const;

export default function ArticlesPage() {
  return (
    <main className="showcase-page">
      <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <SiteHeader current="articles" />

      <div id="main-content">
        <section className="showcase-hero" aria-labelledby="articles-title">
          <div className="showcase-hero-copy">
            <span className="eyebrow">Patient Education</span>
            <h1 id="articles-title">آموزش‌های قابل‌فهم برای قبل و بعد از درمان</h1>
            <p>مطالب این بخش برای افزایش آگاهی عمومی طراحی می‌شوند و جایگزین تشخیص، معاینه یا دستور اختصاصی پزشک نیستند.</p>
          </div>
          <ConceptVisual src="/visuals/ai-assistant.webp" alt="تصویر مفهومی راهنمای دیجیتال بیمار" position="22% center" priority />
        </section>

        <section className="content-shell" aria-label="موضوعات آموزشی">
          <div className="editorial-grid">
            {topics.map(([title, text], index) => (
              <article className="editorial-card" key={title}>
                <small>موضوع {String(index + 1).padStart(2, "0")}</small>
                <h2>{title}</h2>
                <p>{text}</p>
                <a href="/services">خدمات مرتبط <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-shell education-note" aria-label="محدوده محتوای آموزشی">
          <article className="content-panel">
            <span className="eyebrow">Medical Content Policy</span>
            <h2>محتوای آموزشی بدون تشخیص آنلاین</h2>
            <p>محتواهای سایت باید عمومی، قابل‌فهم و مبتنی بر منبع معتبر باشند. توصیه اختصاصی، تشخیص و تجویز فقط در چارچوب ارزیابی پزشک انجام می‌شود.</p>
          </article>
        </section>

        <section className="concept-grid">
          <article className="concept-card visual-implant">
            <span className="eyebrow">Treatment Education</span>
            <h2>آموزش تصویری مسیر درمان</h2>
            <p>تصاویر مفهومی برای توضیح مراحل استفاده می‌شوند و مدرک نتیجه درمان نیستند.</p>
            <a href="/services">مشاهده خدمات</a>
          </article>
          <article className="concept-card visual-before">
            <span className="eyebrow">Image Policy</span>
            <h2>نتیجه واقعی فقط با رضایت معتبر</h2>
            <p>تصاویر واقعی بیمار فقط با رضایت معتبر و توضیح روشن شرایط انتشار استفاده می‌شوند.</p>
            <a href="/about">درباره رویکرد سایت</a>
          </article>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
