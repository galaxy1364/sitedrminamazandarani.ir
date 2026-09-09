import type { Metadata } from "next";
import { ReservationForm } from "@/components/ReservationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "تماس و مراجعه", description: "اطلاعات مراجعه و درخواست نوبت کلینیک." };

export default function ContactPage(){
  return <main className="showcase-page">
    <header className="showcase-header"><a className="brand" href="/"><span className="brand-mark">M</span><span>{site.doctor}<small>{site.specialty}</small></span></a><nav className="showcase-nav"><a href="/services">خدمات</a><a href="/about">درباره</a><a href="/articles">مقالات</a><a href="/contact">تماس</a></nav><a className="nav-cta" href="#booking">رزرو آنلاین</a></header>
    <section className="showcase-hero"><div className="showcase-hero-copy"><span className="eyebrow">Contact & Visit</span><h1>تماس، مراجعه و درخواست نوبت در یک مسیر روشن</h1><p>شماره تماس، آدرس دقیق، ساعات کاری و مسیر نقشه فقط پس از تأیید نهایی اطلاعات رسمی در این صفحه منتشر می‌شوند.</p></div><div className="showcase-visual visual-clinic" aria-label="تصویر مفهومی فضای کلینیک" /></section>
    <section className="content-shell"><div className="contact-grid"><article className="contact-card"><strong>آدرس کلینیک</strong><p>در انتظار تأیید نهایی اطلاعات رسمی؛ هیچ آدرس حدسی منتشر نمی‌شود.</p></article><article className="contact-card"><strong>تلفن و ساعات کاری</strong><p>پس از دریافت و تأیید اطلاعات رسمی در این بخش فعال می‌شود.</p></article></div></section>
    <section id="booking" className="appointment-section premium-appointment section-pad"><div className="appointment-copy"><span className="eyebrow">Online Reservation</span><h2>درخواست نوبت</h2><p>فرم آماده است، اما تا زمان اتصال backend و سیستم کلینیک، درخواست به‌عنوان نوبت قطعی ذخیره یا تأیید نمی‌شود.</p><div className="ai-box"><strong>وضعیت اتصال</strong><p>Frontend و validation فعال؛ persistence و sync در انتظار اتصال واقعی.</p><span>Appointment API — integration pending</span></div></div><ReservationForm /></section>
    <section className="concept-grid"><article className="concept-card visual-ai"><span className="eyebrow">AI Concierge</span><h2>راهنمای مراجعه آینده</h2><p>پس از اتصال منبع دانش واقعی، دستیار می‌تواند سوالات عمومی مراجعه را پاسخ دهد.</p><a href="/articles">مرکز آموزش</a></article><article className="concept-card visual-implant"><span className="eyebrow">Clinical Journey</span><h2>انتخاب خدمت قبل از مراجعه</h2><p>برای آشنایی با مسیرهای درمان، بخش خدمات را ببینید.</p><a href="/services">خدمات تخصصی</a></article></section>
    <footer className="showcase-footer">{site.name} — اطلاعات رسمی تماس پس از تأیید منتشر می‌شوند.</footer>
  </main>
}