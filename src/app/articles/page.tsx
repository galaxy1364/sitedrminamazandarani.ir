import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "مقالات و آموزش", description: "مرکز محتوای آموزشی درباره مسیرهای درمانی و مراقبت‌های دندانپزشکی." };

const topics=[
  ["ایمپلنت","آمادگی قبل از ارزیابی ایمپلنت، پرسش‌های مهم و مسیر کلی بررسی."],
  ["جراحی دهان و فک","مفاهیم عمومی درباره ارزیابی، تصویربرداری و مراقبت پس از درمان."],
  ["زیبایی","مرور اصول طراحی لبخند با تأکید بر تصمیم‌گیری فردمحور."],
  ["روکش و بازسازی","آشنایی با نقش بازسازی عملکرد و فرم دندان."],
  ["مراقبت پس از درمان","چک‌لیست‌های عمومی و زمان مراجعه مجدد بر اساس دستور پزشک."],
  ["راهنمای مراجعه","چه اطلاعات و مدارکی برای ارزیابی دقیق‌تر مفید هستند."]
];

export default function ArticlesPage(){
  return <main className="showcase-page">
    <header className="showcase-header"><a className="brand" href="/"><span className="brand-mark">M</span><span>{site.doctor}<small>{site.specialty}</small></span></a><nav className="showcase-nav"><a href="/services">خدمات</a><a href="/about">درباره</a><a href="/articles">مقالات</a><a href="/contact">تماس</a></nav><a className="nav-cta" href="/#appointment">رزرو آنلاین</a></header>
    <section className="showcase-hero"><div className="showcase-hero-copy"><span className="eyebrow">Knowledge Hub</span><h1>مقالات و آموزش‌های قابل‌فهم برای قبل و بعد از درمان</h1><p>این بخش به‌جای انتشار مقاله ساختگی، ابتدا ساختار موضوعی واقعی را آماده کرده است. مطالب تخصصی پس از تأیید محتوای علمی منتشر می‌شوند.</p></div><div className="showcase-visual visual-ai" aria-label="تصویر مفهومی مرکز دانش" /></section>
    <section className="content-shell"><div className="editorial-grid">{topics.map(([title,text],index)=><article className="editorial-card" key={title}><small>موضوع {String(index+1).padStart(2,"0")}</small><h3>{title}</h3><p>{text}</p><a href="/contact">ارسال پرسش ↗</a></article>)}</div></section>
    <section className="concept-grid"><article className="concept-card visual-implant"><span className="eyebrow">Treatment Education</span><h2>آموزش تصویری مسیر درمان</h2><p>دارایی‌های تصویری قبلی برای توضیح مفهومی مراحل درمان وارد ساختار محتوایی شده‌اند.</p><a href="/services">مشاهده خدمات</a></article><article className="concept-card visual-before"><span className="eyebrow">Before / After Policy</span><h2>نتیجه واقعی فقط با رضایت بیمار</h2><p>تصاویر مفهومی هرگز به‌عنوان نتیجه واقعی بیمار معرفی نمی‌شوند.</p><a href="/about">درباره رویکرد سایت</a></article></section>
    <footer className="showcase-footer">محتوای آموزشی جایگزین تشخیص یا معاینه پزشک نیست.</footer>
  </main>
}