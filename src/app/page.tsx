import { ReservationForm } from "@/components/ReservationForm";
import { services, site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="صفحه اصلی"><span className="brand-mark">M</span><span>{site.doctor}<small>{site.specialty}</small></span></a>
        <nav aria-label="منوی اصلی"><a href="#services">خدمات</a><a href="#experience">تجربه درمان</a><a href="#appointment">رزرو نوبت</a><a href="#contact">تماس</a></nav>
        <a className="nav-cta" href="#appointment">رزرو آنلاین</a>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow">Modern Oral & Maxillofacial Care</div>
          <h1>دندانپزشکی آینده،<br /><span>آرام‌تر، دقیق‌تر، انسانی‌تر.</span></h1>
          <p>{site.description}</p>
          <div className="hero-actions"><a className="primary" href="#appointment">رزرو نوبت آنلاین</a><a className="ghost" href="#services">مشاهده خدمات</a></div>
          <div className="trust-row"><span>✓ طراحی Mobile-first</span><span>✓ مسیر رزرو امن</span><span>✓ آماده اتصال به نرم‌افزار کلینیک</span></div>
        </div>
        <div className="hero-visual" aria-label="نمایش انتزاعی درمان دیجیتال">
          <div className="orb orb-a"/><div className="orb orb-b"/><div className="tooth-stage"><div className="tooth">✧</div><div className="scan-ring one"/><div className="scan-ring two"/></div>
          <div className="floating-card card-a"><b>AI Concierge</b><span>راهنمایی و رزرو هوشمند</span><em>اتصال واقعی: در انتظار API</em></div>
          <div className="floating-card card-b"><b>Digital Workflow</b><span>از ویزیت تا پیگیری</span></div>
        </div>
      </section>

      <section id="services" className="section-pad services-section">
        <div className="section-head"><div><span className="eyebrow">خدمات تخصصی</span><h2>مسیر درمان، واضح و قابل فهم</h2></div><p>هر خدمت با توضیح شفاف، مسیر درمان و فضای آماده برای ویدئو/انیمیشن علمی اختصاصی طراحی شده است.</p></div>
        <div className="service-grid">{services.map((s, i) => <article className="service-card" key={s.title}><span className="service-index">0{i+1}</span><i>{s.icon}</i><h3>{s.title}</h3><p>{s.text}</p><a href="#appointment">درخواست مشاوره ←</a></article>)}</div>
      </section>

      <section id="experience" className="section-pad split-section">
        <div className="clinical-animation"><div className="jaw upper"><span/><span/><span/><span/></div><div className="implant-sequence"><b className="implant"/><b className="abutment"/><b className="crown"/></div><div className="jaw lower"><span/><span/><span/><span/></div></div>
        <div className="experience-copy"><span className="eyebrow">Interactive Treatment Story</span><h2>انیمیشن علمی، نه تصویر تزئینی</h2><p>این بخش برای نمایش مرحله‌ای درمان ایمپلنت، جراحی و زیبایی آماده شده و بعداً تصاویر واقعی کلینیک می‌توانند بدون تغییر معماری جایگزین شوند.</p><ul><li>Before / After با رضایت بیمار</li><li>Timeline درمان و مراقبت پس از عمل</li><li>نسخه سبک و دسترس‌پذیر برای موبایل</li></ul></div>
      </section>

      <section id="appointment" className="section-pad appointment-section">
        <div className="appointment-copy"><span className="eyebrow">Online Reservation</span><h2>رزرو نوبت در کمتر از یک دقیقه</h2><p>فرم سمت چپ فقط داده معتبر می‌پذیرد. ذخیره‌سازی اطلاعات بیمار عمداً تا اتصال دیتابیس و API واقعی کلینیک فعال نشده است.</p><div className="ai-box"><strong>دستیار هوشمند کلینیک</strong><p>معماری چت برای پاسخ به FAQ، هدایت خدمت و رزرو آماده می‌شود؛ پاسخ پزشکی تشخیصی بدون نظارت پزشک فعال نخواهد شد.</p><span>Integration status: BLOCKED — API/knowledge source required</span></div></div>
        <ReservationForm />
      </section>

      <footer id="contact" className="footer section-pad"><div><div className="brand footer-brand"><span className="brand-mark">M</span><span>{site.doctor}<small>{site.specialty}</small></span></div><p>وب‌سایت رسمی کلینیک — اطلاعات تماس و آدرس پس از تأیید نهایی درج می‌شود.</p></div><div><b>دسترسی سریع</b><a href="#services">خدمات</a><a href="#appointment">نوبت آنلاین</a><a href="#top">بازگشت بالا</a></div><div><b>وضعیت اتصال</b><span>Appointment API — Pending</span><span>AI Concierge — Pending</span><span>Clinic Software — Pending</span></div></footer>
    </main>
  );
}
