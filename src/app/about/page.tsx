import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "درباره پزشک", description: "معرفی حرفه‌ای دکتر مینا مازندرانی و رویکرد درمانی کلینیک." };

export default function AboutPage(){
  return <main className="showcase-page">
    <header className="showcase-header">
      <a className="brand" href="/"><span className="brand-mark">M</span><span>{site.doctor}<small>{site.specialty}</small></span></a>
      <nav className="showcase-nav"><a href="/services">خدمات</a><a href="/about">درباره</a><a href="/articles">مقالات</a><a href="/contact">تماس</a></nav>
      <a className="nav-cta" href="/#appointment">رزرو آنلاین</a>
    </header>
    <section className="showcase-hero">
      <div className="showcase-hero-copy"><span className="eyebrow">About the Doctor</span><h1>{site.doctor}</h1><p>{site.specialty}</p><p>این صفحه فقط اطلاعات تأییدشده را منتشر می‌کند. سوابق تحصیلی، عضویت‌ها، افتخارات و جزئیات حرفه‌ای بعد از دریافت مستندات واقعی تکمیل می‌شوند.</p></div>
      <div className="about-portrait-placeholder"><div><strong>پرتره واقعی پزشک</strong><p>تصویر مفهومی ساخته‌شده قبلی عمداً به‌عنوان عکس دکتر استفاده نمی‌شود. پس از دریافت عکس واقعی، همین قاب بدون تغییر معماری جایگزین خواهد شد.</p></div></div>
    </section>
    <section className="content-shell">
      <article className="content-panel"><span className="eyebrow">Clinical Philosophy</span><h2>شفافیت، ارزیابی دقیق و تصمیم پزشک‌محور</h2><p>محتوای سایت برای توضیح مسیر درمان و آماده‌سازی بهتر بیمار طراحی شده است؛ تصمیم بالینی فقط پس از معاینه و بررسی اطلاعات لازم انجام می‌شود.</p></article>
      <div className="contact-grid"><article className="contact-card"><strong>جراحی دهان، فک و صورت</strong><p>تمرکز تخصصی اعلام‌شده در هویت رسمی سایت.</p></article><article className="contact-card"><strong>تجربه دیجیتال بیمار</strong><p>ساختار سایت برای رزرو، آموزش و پیگیری آینده طراحی شده و اتصال عملیاتی فقط پس از تأیید backend فعال می‌شود.</p></article></div>
    </section>
    <section className="concept-grid"><article className="concept-card visual-clinic"><span className="eyebrow">Clinic Experience</span><h2>فضای کلینیک</h2><p>تصویر فعلی مفهومی است و بعداً با عکس‌های واقعی مرکز جایگزین می‌شود.</p><a href="/contact">اطلاعات مراجعه</a></article><article className="concept-card visual-ai"><span className="eyebrow">Digital Care</span><h2>مسیر دیجیتال بیمار</h2><p>راهنمایی، رزرو و پیگیری در معماری سایت دیده شده است.</p><a href="/#appointment">رزرو نوبت</a></article></section>
    <footer className="showcase-footer">{site.name}</footer>
  </main>
}