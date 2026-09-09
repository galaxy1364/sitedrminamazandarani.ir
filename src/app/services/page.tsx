import type { Metadata } from "next";
import { services, site } from "@/lib/site";

export const metadata: Metadata = { title: "خدمات تخصصی", description: "مرور خدمات تخصصی و مسیرهای درمانی کلینیک." };

export default function ServicesPage(){
  return <main className="showcase-page">
    <header className="showcase-header">
      <a className="brand" href="/"><span className="brand-mark">M</span><span>{site.doctor}<small>{site.specialty}</small></span></a>
      <nav className="showcase-nav" aria-label="منوی صفحات"><a href="/services">خدمات</a><a href="/about">درباره</a><a href="/articles">مقالات</a><a href="/contact">تماس</a></nav>
      <a className="nav-cta" href="/#appointment">رزرو آنلاین</a>
    </header>
    <section className="showcase-hero">
      <div className="showcase-hero-copy"><span className="eyebrow">Clinical Services</span><h1>خدمات تخصصی، با مسیر درمان قابل‌فهم</h1><p>ساختار این صفحه برای توضیح مرحله‌ای هر خدمت، محتوای آموزشی و اتصال آینده به workflow کلینیک طراحی شده است.</p></div>
      <div className="showcase-visual visual-implant" aria-label="تصویر مفهومی ایمپلنت" />
    </section>
    <section className="content-shell"><div className="editorial-grid">
      {services.map((item,index)=><article className="editorial-card" key={item.title}><small>{String(index+1).padStart(2,"0")}</small><h3>{item.title}</h3><p>{item.text}</p><a href="/#appointment">درخواست ارزیابی ↗</a></article>)}
    </div></section>
    <section className="concept-grid">
      <article className="concept-card visual-before"><span className="eyebrow">Treatment Story</span><h2>نمایش مرحله‌ای درمان</h2><p>تصویر مفهومی برای توضیح روند درمان؛ جایگزین نتیجه واقعی بیمار نیست.</p><a href="/#experience">دیدن تجربه درمان</a></article>
      <article className="concept-card visual-ai"><span className="eyebrow">AI Architecture</span><h2>راهنمای هوشمند مسیر بیمار</h2><p>ساختار آماده اتصال به منبع دانش و API واقعی، بدون تشخیص یا تجویز مستقل.</p><a href="/#appointment">رفتن به رزرو</a></article>
    </section>
    <footer className="showcase-footer">{site.name} — اطلاعات تماس و آدرس فقط پس از تأیید نهایی منتشر می‌شوند.</footer>
  </main>
}