import { ReservationForm } from "@/components/ReservationForm";
import { TreatmentStudio } from "@/components/TreatmentStudio";
import { careJourney, faqs, services, site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">رفتن به محتوای اصلی</a>

      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="صفحه اصلی">
          <span className="brand-mark">M</span>
          <span>{site.doctor}<small>{site.specialty}</small></span>
        </a>
        <nav aria-label="منوی اصلی">
          <a href="#services">خدمات</a>
          <a href="#studio">استودیو درمان</a>
          <a href="#journey">مسیر درمان</a>
          <a href="#faq">سوالات</a>
          <a href="#appointment">رزرو نوبت</a>
        </nav>
        <a className="nav-cta" href="#appointment">رزرو آنلاین</a>
      </header>

      <div id="content">
        <section id="top" className="hero section-pad premium-hero">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">Modern Oral & Maxillofacial Care</div>
            <h1>دندانپزشکی آینده،<br /><span>آرام‌تر، دقیق‌تر، انسانی‌تر.</span></h1>
            <p>{site.description}</p>
            <div className="hero-actions">
              <a className="primary" href="#appointment">رزرو نوبت آنلاین</a>
              <a className="ghost" href="#studio">دیدن تجربه تعاملی</a>
            </div>
            <div className="trust-row">
              <span>✓ طراحی Mobile-first</span>
              <span>✓ اعتبارسنجی ورودی فعال</span>
              <span>✓ معماری آماده اتصال به نرم‌افزار کلینیک</span>
              <span>✓ بدون ذخیره‌سازی نمایشی اطلاعات بیمار</span>
            </div>
            <div className="hero-proof-grid" aria-label="ویژگی‌های تجربه دیجیتال">
              <div><strong>01</strong><span>Clinical-first UX</span></div>
              <div><strong>02</strong><span>Accessible by design</span></div>
              <div><strong>03</strong><span>Integration-ready</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="نمایش انتزاعی درمان دیجیتال">
            <div className="orb orb-a" aria-hidden="true" />
            <div className="orb orb-b" aria-hidden="true" />
            <div className="tooth-stage" aria-hidden="true">
              <div className="tooth">✧</div>
              <div className="scan-ring one" />
              <div className="scan-ring two" />
              <div className="scan-line" />
            </div>
            <div className="floating-card card-a">
              <b>AI Concierge</b>
              <span>راهنمایی و رزرو هوشمند</span>
              <em>اتصال واقعی: در انتظار API و knowledge source</em>
            </div>
            <div className="floating-card card-b">
              <b>Digital Workflow</b>
              <span>از ویزیت تا پیگیری</span>
            </div>
            <div className="floating-card card-c">
              <b>Doctor-led</b>
              <span>تصمیم بالینی فقط با پزشک</span>
            </div>
            <div className="hero-status-card">
              <span className="status-dot" aria-hidden="true" />
              <div><strong>Integration Architecture Ready</strong><small>اتصال عملیاتی هنوز فعال نشده است</small></div>
            </div>
          </div>
        </section>

        <section className="principles-strip" aria-label="اصول تجربه درمان">
          <div><strong>شفافیت</strong><span>مراحل درمان قابل فهم</span></div>
          <div><strong>دقت</strong><span>تصمیم‌گیری پس از ارزیابی پزشک</span></div>
          <div><strong>پیگیری</strong><span>مسیر مشخص پس از درمان</span></div>
          <div><strong>حریم خصوصی</strong><span>بدون ذخیره داده تا تأیید backend</span></div>
        </section>

        <section id="services" className="section-pad services-section premium-services">
          <div className="section-head">
            <div><span className="eyebrow">خدمات تخصصی</span><h2>هر درمان، یک مسیر روشن و طراحی‌شده</h2></div>
            <p>ساختار هر خدمت برای توضیح مرحله‌ای، محتوای علمی، ویدئو و اتصال آینده به workflow کلینیک آماده شده است.</p>
          </div>
          <div className="service-grid service-grid-six">
            {services.map((service, index) => (
              <article className="service-card premium-service-card" key={service.title}>
                <div className="service-card-top"><span className="service-index">{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true">{service.icon}</i></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#appointment">درخواست ارزیابی <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <div id="studio"><TreatmentStudio /></div>

        <section id="journey" className="section-pad journey-section">
          <div className="section-head">
            <div><span className="eyebrow">Care Journey</span><h2>از اولین درخواست تا پیگیری درمان</h2></div>
            <p>معماری سایت بر اساس workflow واقعی کلینیک طراحی شده تا بعداً به نرم‌افزار نوبت‌دهی و پرونده متصل شود، نه اینکه فقط یک فرم تزئینی باشد.</p>
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

        <section id="experience" className="section-pad split-section premium-split">
          <div className="clinical-animation" aria-label="انیمیشن شماتیک مراحل ایمپلنت">
            <div className="animation-label">Implant Treatment Story</div>
            <div className="jaw upper" aria-hidden="true"><span /><span /><span /><span /></div>
            <div className="implant-sequence" aria-hidden="true"><b className="implant" /><b className="abutment" /><b className="crown" /></div>
            <div className="jaw lower" aria-hidden="true"><span /><span /><span /><span /></div>
            <div className="animation-legend"><span>Implant</span><span>Abutment</span><span>Crown</span></div>
          </div>
          <div className="experience-copy">
            <span className="eyebrow">Interactive Treatment Story</span>
            <h2>انیمیشن علمی، نه تصویر تزئینی</h2>
            <p>این بخش برای نمایش مرحله‌ای درمان ایمپلنت، جراحی و زیبایی آماده شده و بعداً تصاویر یا ویدئوهای واقعی کلینیک می‌توانند بدون تغییر معماری جایگزین شوند.</p>
            <ul>
              <li>Before / After فقط با رضایت معتبر بیمار</li>
              <li>Timeline درمان و مراقبت پس از عمل</li>
              <li>نسخه سبک و دسترس‌پذیر برای موبایل</li>
              <li>قابل توسعه به محتوای ویدیویی اختصاصی هر خدمت</li>
            </ul>
            <a className="ghost inline-action" href="#appointment">مشاوره برای این درمان</a>
          </div>
        </section>

        <section className="ai-section section-pad">
          <div className="ai-visual-card premium-ai-card">
            <div className="ai-pulse" aria-hidden="true" />
            <div className="ai-orbit orbit-one" aria-hidden="true" />
            <div className="ai-orbit orbit-two" aria-hidden="true" />
            <span className="eyebrow">AI Concierge Architecture</span>
            <h2>هوشمندی واقعی یعنی کمک به مسیر بیمار، نه نمایش مصنوعی</h2>
            <p>دستیار آینده سایت می‌تواند سوالات عمومی را از knowledge base تأییدشده پاسخ دهد، خدمت مناسب برای بررسی را معرفی کند و کاربر را وارد مسیر رزرو کند؛ اما تشخیص یا تجویز مستقل نخواهد داشت.</p>
            <div className="ai-capability-grid">
              <div><strong>FAQ</strong><span>پاسخ از منبع تأییدشده</span></div>
              <div><strong>Routing</strong><span>هدایت به خدمت و فرم مناسب</span></div>
              <div><strong>Booking</strong><span>اتصال به API نوبت‌دهی واقعی</span></div>
            </div>
            <div className="integration-banner">Integration status: BLOCKED — provider, knowledge source و credential واقعی لازم است.</div>
          </div>
        </section>

        <section id="appointment" className="section-pad appointment-section premium-appointment">
          <div className="appointment-copy">
            <span className="eyebrow">Online Reservation</span>
            <h2>درخواست نوبت، ساده و بدون وعده ساختگی</h2>
            <p>فرم فقط داده معتبر می‌پذیرد. هیچ اطلاعات بیماری تا زمان اتصال backend، سیاست حریم خصوصی و کنترل دسترسی تأییدشده ذخیره نمی‌شود.</p>
            <div className="appointment-notes">
              <span>۱. اطلاعات اولیه را وارد کنید</span>
              <span>۲. خدمت و زمان ترجیحی را انتخاب کنید</span>
              <span>۳. پس از اتصال سیستم کلینیک، نوبت واقعی همان‌جا تأیید می‌شود</span>
            </div>
            <div className="ai-box">
              <strong>وضعیت فعلی نوبت‌دهی</strong>
              <p>Frontend و validation آماده‌اند؛ persistence و sync عمداً غیرفعال هستند تا نرم‌افزار کلینیک به‌صورت واقعی متصل شود.</p>
              <span>Appointment API — integration pending</span>
            </div>
          </div>
          <ReservationForm />
        </section>

        <section id="faq" className="section-pad faq-section">
          <div className="section-head">
            <div><span className="eyebrow">FAQ</span><h2>پاسخ‌های شفاف قبل از مراجعه</h2></div>
            <p>این بخش برای کاهش ابهام و آماده‌سازی بهتر بیمار طراحی شده و جایگزین تشخیص یا معاینه پزشک نیست.</p>
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
            <h2>شروع درمان با یک تجربه دیجیتال در سطح برند</h2>
            <p>اطلاعات اولیه را آماده کنید؛ پس از فعال‌شدن اتصال واقعی نوبت‌دهی، درخواست‌ها مستقیماً وارد workflow کلینیک خواهند شد.</p>
          </div>
          <a className="primary" href="#appointment">رفتن به رزرو نوبت</a>
        </section>

        <footer id="contact" className="footer section-pad">
          <div>
            <div className="brand footer-brand"><span className="brand-mark">M</span><span>{site.doctor}<small>{site.specialty}</small></span></div>
            <p>وب‌سایت رسمی کلینیک — آدرس، تلفن و اطلاعات قانونی فقط پس از تأیید نهایی در این بخش درج می‌شوند.</p>
          </div>
          <div><b>دسترسی سریع</b><a href="#services">خدمات</a><a href="#studio">استودیو درمان</a><a href="#appointment">نوبت آنلاین</a><a href="#faq">سوالات متداول</a></div>
          <div><b>وضعیت اتصال</b><span>Appointment API — Pending</span><span>AI Concierge — Pending</span><span>Clinic Software — Pending</span></div>
        </footer>
      </div>

      <div className="mobile-dock" aria-label="دسترسی سریع موبایل">
        <a href="#services">خدمات</a>
        <a className="mobile-dock-main" href="#appointment">رزرو نوبت</a>
        <a href="#studio">استودیو</a>
      </div>
    </main>
  );
}
