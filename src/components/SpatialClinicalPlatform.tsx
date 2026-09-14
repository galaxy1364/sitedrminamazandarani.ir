"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useMemo, useState } from "react";

type TreatmentKey = "implant" | "veneer" | "endo" | "restorative";
type Currency = "تومان" | "AED" | "USD";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const treatments: Record<TreatmentKey, { title: string; subtitle: string; detail: string }> = {
  implant: {
    title: "ایمپلنت",
    subtitle: "Implant planning",
    detail: "نمایش مفهومی مسیر ارزیابی، طرح درمان و بازسازی؛ تصمیم نهایی فقط پس از معاینه و تصویربرداری لازم انجام می‌شود."
  },
  veneer: {
    title: "طراحی لبخند",
    subtitle: "Smile design",
    detail: "پیش‌نمایش آموزشی تناسب فرم و رنگ؛ نتیجه واقعی به شرایط دندان، بافت و طرح درمان اختصاصی وابسته است."
  },
  endo: {
    title: "درمان ریشه",
    subtitle: "Endodontic pathway",
    detail: "نمایش آموزشی ساختار دندان و مسیر ارزیابی درد؛ این ابزار تشخیص پزشکی یا جایگزین معاینه نیست."
  },
  restorative: {
    title: "ترمیم و روکش",
    subtitle: "Restorative workflow",
    detail: "نمایش مفهومی بازسازی فرم و عملکرد دندان با تأکید بر ارزیابی پزشک‌محور و حفظ بافت سالم."
  }
};

const teeth: Array<{ id: string; label: string; treatment: TreatmentKey }> = [
  { id: "16", label: "۱۶", treatment: "restorative" },
  { id: "15", label: "۱۵", treatment: "implant" },
  { id: "14", label: "۱۴", treatment: "endo" },
  { id: "13", label: "۱۳", treatment: "veneer" },
  { id: "12", label: "۱۲", treatment: "veneer" },
  { id: "11", label: "۱۱", treatment: "veneer" },
  { id: "21", label: "۲۱", treatment: "veneer" },
  { id: "22", label: "۲۲", treatment: "veneer" },
  { id: "23", label: "۲۳", treatment: "veneer" },
  { id: "24", label: "۲۴", treatment: "endo" },
  { id: "25", label: "۲۵", treatment: "implant" },
  { id: "26", label: "۲۶", treatment: "restorative" }
];

const shades = [
  ["B1", "#f8f4e7"],
  ["A1", "#f1ead8"],
  ["A2", "#e8ddc6"],
  ["A3", "#dccbab"],
  ["B2", "#e6d7b6"],
  ["C1", "#d5c7ae"]
] as const;

const currencies: Currency[] = ["تومان", "AED", "USD"];

export function SpatialClinicalPlatform() {
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentKey>("implant");
  const [shade, setShade] = useState("A1");
  const [compare, setCompare] = useState(50);
  const [amount, setAmount] = useState("120000000");
  const [months, setMonths] = useState(6);
  const [currency, setCurrency] = useState<Currency>("تومان");
  const [batchCode, setBatchCode] = useState("");
  const [notice, setNotice] = useState("برای حفظ حریم خصوصی، هیچ تصویر پزشکی یا اطلاعات بیمار در این نسخه دریافت نمی‌شود.");
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installment = useMemo(() => {
    const parsed = Number(amount.replace(/[^0-9.]/g, ""));
    if (!Number.isFinite(parsed) || parsed <= 0 || months <= 0) return 0;
    return parsed / months;
  }, [amount, months]);

  const formatAmount = (value: number) => {
    if (!value) return "—";
    return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value);
  };

  const chooseTooth = (treatment: TreatmentKey) => {
    setSelectedTreatment(treatment);
    if ("vibrate" in navigator) navigator.vibrate?.(7);
  };

  const unavailable = (feature: string) => {
    setNotice(`${feature} پس از اتصال سرویس واقعی، تأیید حریم خصوصی و کنترل دسترسی فعال می‌شود.`);
  };

  const verifyBatch = () => {
    setNotice(
      batchCode.trim()
        ? "کد فقط در مرورگر بررسی شد؛ منبع اصالت شرکت سازنده هنوز متصل نیست و هیچ تأیید اصالتی صادر نشد."
        : "برای بررسی واقعی اصالت، ابتدا باید منبع رسمی شرکت سازنده و API معتبر متصل شود."
    );
  };

  const installPwa = async () => {
    if (!installPrompt) {
      setNotice("اگر مرورگر نصب مستقیم را پیشنهاد نمی‌دهد، از گزینه Add to Home Screen / Install App در منوی مرورگر استفاده کنید.");
      return;
    }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setNotice(choice.outcome === "accepted" ? "درخواست نصب به مرورگر ارسال شد." : "نصب برنامه لغو شد.");
    setInstallPrompt(null);
  };

  const comparisonStyle = { "--compare": `${compare}%` } as CSSProperties;

  return (
    <div className="world-platform" aria-label="تجربه دیجیتال کلینیک">
      <section id="smile-simulator" className="world-section spatial-clinical" aria-labelledby="spatial-title">
        <div className="world-section-head">
          <div>
            <span className="world-kicker">Spatial Clinical Experience</span>
            <h2 id="spatial-title">مدل تعاملی درمان، بدون ادعای تشخیص</h2>
          </div>
          <p>یک لایه تعاملی برای توضیح گزینه‌های درمانی؛ داده‌های نمایش‌داده‌شده آموزشی هستند و جایگزین معاینه، تصویربرداری یا طرح درمان پزشک نیستند.</p>
        </div>

        <div className="spatial-grid">
          <div className="jaw-console" aria-label="مدل تعاملی دندان‌ها">
            <div className="jaw-ambient" aria-hidden="true" />
            <div className="jaw-orbit" aria-hidden="true" />
            <div className="teeth-arc" role="group" aria-label="انتخاب دندان برای نمایش مسیر درمان">
              {teeth.map((tooth, index) => (
                <button
                  key={tooth.id}
                  type="button"
                  className={selectedTreatment === tooth.treatment ? "tooth-node is-active" : "tooth-node"}
                  style={{ "--i": index } as CSSProperties}
                  onClick={() => chooseTooth(tooth.treatment)}
                  aria-label={`دندان ${tooth.label}: ${treatments[tooth.treatment].title}`}
                >
                  <span aria-hidden="true">◊</span>
                  <small>{tooth.label}</small>
                </button>
              ))}
            </div>
            <div className="jaw-core" aria-hidden="true"><span>✦</span></div>
            <div className="spatial-readout">
              <small>{treatments[selectedTreatment].subtitle}</small>
              <strong>{treatments[selectedTreatment].title}</strong>
              <p>{treatments[selectedTreatment].detail}</p>
            </div>
          </div>

          <aside className="shade-console" aria-label="راهنمای مفهومی انتخاب رنگ">
            <span className="world-kicker">Digital Shade Preview</span>
            <h3>پیش‌نمایش آموزشی رنگ</h3>
            <p>این انتخابگر فقط برای نمایش رابط کاربری و گفت‌وگوی بهتر درباره رنگ است؛ تعیین نهایی رنگ به شرایط بالینی و نور استاندارد وابسته است.</p>
            <div className="shade-preview" style={{ background: shades.find(([code]) => code === shade)?.[1] }}>
              <span>{shade}</span>
            </div>
            <div className="shade-row" role="group" aria-label="انتخاب رنگ مفهومی">
              {shades.map(([code, color]) => (
                <button key={code} type="button" className={shade === code ? "is-active" : ""} onClick={() => setShade(code)}>
                  <i style={{ background: color }} aria-hidden="true" /><span>{code}</span>
                </button>
              ))}
            </div>
            <div className="privacy-chip">بدون ذخیره انتخاب‌ها</div>
          </aside>
        </div>
      </section>

      <section id="gallery" className="world-section comparison-section" aria-labelledby="comparison-title">
        <div className="world-section-head">
          <div><span className="world-kicker">Macro Comparison Lab</span><h2 id="comparison-title">اسلایدر مقایسه‌ای با افشای شفاف تصویر مفهومی</h2></div>
          <p>برای انتشار Before/After واقعی، تصاویر استانداردشده و رضایت معتبر بیمار لازم است. تا آن زمان این رابط فقط نمونه تعاملی طراحی است.</p>
        </div>
        <div className="comparison-layout">
          <div className="comparison-window" style={comparisonStyle}>
            <Image src="/visuals/before-after.webp" alt="" fill sizes="(max-width: 900px) 100vw, 62vw" className="comparison-base" />
            <Image src="/visuals/before-after.webp" alt="" fill sizes="(max-width: 900px) 100vw, 62vw" className="comparison-reveal" />
            <div className="comparison-line" aria-hidden="true"><span /></div>
            <span className="comparison-label before">نمای پایه</span>
            <span className="comparison-label after">نمای برجسته</span>
            <span className="concept-seal">تصویر مفهومی — نتیجه بیمار نیست</span>
          </div>
          <div className="comparison-control">
            <label htmlFor="compare-range">موقعیت مقایسه <strong>{compare}٪</strong></label>
            <input id="compare-range" type="range" min="15" max="85" value={compare} onChange={(event) => setCompare(Number(event.target.value))} />
            <div className="comparison-features"><span>Zoom-ready</span><span>Consent-gated</span><span>High-res pipeline</span></div>
          </div>
        </div>
      </section>

      <section id="smart-care" className="world-section smart-hub" aria-labelledby="smart-care-title">
        <div className="world-section-head light-head">
          <div><span className="world-kicker">AI & Telehealth Hub</span><h2 id="smart-care-title">هوشمندی پزشکی فقط با منبع و پروتکل تأییدشده</h2></div>
          <p>معماری سه ماژول آماده است، اما هیچ‌کدام تا اتصال سرویس واقعی و تصویب الزامات پزشکی و حریم خصوصی، تشخیص یا پرونده بیمار ایجاد نمی‌کنند.</p>
        </div>
        <div className="smart-card-grid">
          <article className="smart-card emergency-card">
            <span className="smart-icon" aria-hidden="true">✦</span><small>Emergency Triage</small><h3>راهنمای فوریت</h3>
            <p>مسیر تصمیم‌یار عمومی با امکان تحویل به اپراتور یا پزشک؛ الگوریتم تریاژ خودکار هنوز فعال نیست.</p>
            <button type="button" onClick={() => unavailable("تریاژ هوشمند")}>وضعیت ماژول</button>
          </article>
          <article className="smart-card">
            <span className="smart-icon" aria-hidden="true">◉</span><small>WebRTC Teleconsult</small><h3>ویزیت ویدیویی</h3>
            <p>جایگاه رزرو تله‌کانسالت بدون نصب برنامه؛ WebRTC و زمان‌بندی پزشک نیازمند backend واقعی است.</p>
            <button type="button" onClick={() => unavailable("ویزیت ویدیویی")}>بررسی آمادگی</button>
          </article>
          <article className="smart-card">
            <span className="smart-icon" aria-hidden="true">⌁</span><small>Imaging Intelligence</small><h3>آپلود OPG / تصویر داخل دهان</h3>
            <p>برای حفاظت از داده سلامت، upload و تحلیل تصویر تا زمان تأیید privacy/security عمداً غیرفعال است.</p>
            <button type="button" onClick={() => unavailable("اسکن و تحلیل تصویر پزشکی")}>چرا غیرفعال است؟</button>
          </article>
        </div>
        <p className="world-live-notice" aria-live="polite">{notice}</p>
      </section>

      <section id="finance" className="world-section finance-suite" aria-labelledby="finance-title">
        <div className="world-section-head">
          <div><span className="world-kicker">Booking & Financial Suite</span><h2 id="finance-title">معماری رزرو و مالی، بدون قیمت یا پرداخت ساختگی</h2></div>
          <p>تقویم، OTP، بیمه و پرداخت فقط پس از اتصال provider واقعی فعال می‌شوند. محاسبه‌گر اقساط زیر صرفاً تقسیم ریاضی مبلغی است که خود کاربر وارد می‌کند.</p>
        </div>
        <div className="finance-grid">
          <article className="booking-preview">
            <div className="booking-top"><span>Appointment Flow</span><b>Integration-ready</b></div>
            <ol className="booking-steps">
              <li><span>01</span><div><strong>انتخاب مرکز</strong><small>در انتظار اطلاعات رسمی شعبه</small></div></li>
              <li><span>02</span><div><strong>انتخاب پزشک و زمان</strong><small>در انتظار schedule API</small></div></li>
              <li><span>03</span><div><strong>تأیید OTP</strong><small>در انتظار سرویس پیامک رسمی</small></div></li>
              <li><span>04</span><div><strong>تأیید نهایی</strong><small>فقط پس از پاسخ سامانه کلینیک</small></div></li>
            </ol>
            <button type="button" className="world-primary" onClick={() => unavailable("رزرو فوری و OTP")}>وضعیت رزرو آنلاین</button>
          </article>

          <article className="installment-card">
            <span className="world-kicker">Installment Math</span><h3>محاسبه‌گر اقساط</h3>
            <label>مبلغ اعلام‌شده توسط کلینیک<input value={amount} inputMode="decimal" onChange={(event) => setAmount(event.target.value)} aria-label="مبلغ درمان" /></label>
            <div className="inline-fields">
              <label>تعداد ماه<select value={months} onChange={(event) => setMonths(Number(event.target.value))}><option value={3}>۳</option><option value={6}>۶</option><option value={9}>۹</option><option value={12}>۱۲</option></select></label>
              <label>واحد<select value={currency} onChange={(event) => setCurrency(event.target.value as Currency)}>{currencies.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
            </div>
            <div className="installment-result"><span>تقسیم ماهانه بدون سود/کارمزد</span><strong>{formatAmount(installment)} <small>{currency}</small></strong></div>
            <p>این عدد پیشنهاد مالی یا قرارداد اقساط نیست؛ سود، کارمزد، بیمه و شرایط پرداخت فقط با قرارداد رسمی مشخص می‌شوند.</p>
          </article>

          <article className="payment-rail">
            <h3>Insurance & Payment Adapters</h3><p>جایگاه اتصال فراهم است، اما هیچ روش پرداخت یا پوشش بیمه‌ای در نسخه فعلی به‌عنوان «پذیرفته‌شده» معرفی نمی‌شود.</p>
            <div className="adapter-chips">
              {["بیمه", "شتاب / شاپرک", "پرداخت بیعانه", "USDT · Medical Travel"].map((item) => <button type="button" key={item} onClick={() => unavailable(item)}>{item}<small>قابل اتصال</small></button>)}
            </div>
          </article>
        </div>
      </section>

      <section id="trust" className="world-section trust-suite" aria-labelledby="trust-title">
        <div className="world-section-head">
          <div><span className="world-kicker">Trust & Authenticity</span><h2 id="trust-title">اعتماد باید قابل راستی‌آزمایی باشد، نه تبلیغاتی</h2></div>
          <p>آمار موفقیت، تعداد ایمپلنت، برند مواد، نظر بیمار و گواهی فقط زمانی نمایش داده می‌شوند که منبع قابل ممیزی وجود داشته باشد.</p>
        </div>
        <div className="trust-grid">
          <article className="auth-card">
            <div className="qr-placeholder" aria-hidden="true">⌗</div><div><span className="world-kicker">Material Verification</span><h3>بررسی QR / Batch Code</h3><p>UI آماده اتصال به دیتابیس رسمی سازنده است؛ نسخه فعلی هیچ اصالت ساختگی تأیید نمی‌کند.</p></div>
            <label className="batch-input"><span>Batch / QR code</span><input value={batchCode} onChange={(event) => setBatchCode(event.target.value)} placeholder="کد نمونه" /></label>
            <button type="button" onClick={verifyBatch}>بررسی وضعیت منبع</button>
          </article>
          <article className="proof-gate">
            <span>Verified Evidence Slots</span>
            <div><strong>Success Rate</strong><small>پس از ارائه داده معتبر</small></div>
            <div><strong>Implant Count</strong><small>پس از ممیزی پرونده/گزارش</small></div>
            <div><strong>Material Origin</strong><small>پس از سند برند و batch</small></div>
          </article>
          <article className="reviews-gate">
            <span className="world-kicker">Patient Stories</span><h3>ویدئوها و Google Reviews</h3><p>Feed زنده فقط از منبع رسمی و با badge قابل‌راستی‌آزمایی نمایش داده خواهد شد؛ هیچ review نمونه به‌عنوان نظر واقعی منتشر نمی‌شود.</p>
            <button type="button" onClick={() => unavailable("Google Reviews و Patient Stories")}>وضعیت اتصال</button>
          </article>
        </div>
      </section>

      <section id="patient-portal" className="world-section portal-arrival" aria-labelledby="portal-title">
        <div className="portal-card">
          <span className="world-kicker">Private Patient Portal</span><h2 id="portal-title">پرتال بیمار با حداقل‌سازی داده و احراز هویت امن</h2>
          <p>این بخش به‌صورت معماری آماده است؛ ورود بیمار، پرونده، اسناد و پیام امن تا زمان انتخاب identity provider، کنترل دسترسی و سیاست نگهداری داده فعال نمی‌شوند.</p>
          <div className="portal-pills"><span>OTP / Passkey-ready</span><span>Role-based access</span><span>Encrypted transport</span></div>
          <button type="button" onClick={() => unavailable("پرتال بیمار")}>مشاهده وضعیت امنیت</button>
        </div>
        <div id="arrival" className="arrival-card">
          <span className="world-kicker">Smart Arrival</span><h3>مسیریابی، ترافیک و پارکینگ</h3><p>پس از تأیید آدرس رسمی می‌توان مسیریابی را به سرویس‌های مختلف و داده ترافیک/پارکینگ واقعی متصل کرد.</p>
          <div className="map-shell" aria-label="جایگاه نقشه تا زمان تأیید آدرس"><div className="map-grid" aria-hidden="true" /><span>Official location pending</span></div>
          <div className="map-providers">{["نشان", "بلد", "Google Maps", "Snapp", "Waze"].map((item) => <button type="button" key={item} onClick={() => unavailable(`مسیریابی ${item}`)}>{item}</button>)}</div>
        </div>
      </section>

      <section className="world-section compliance-strip" aria-label="نصب و الزامات">
        <div><span className="world-kicker">PWA</span><h3>Installable Clinic Experience</h3><p>Manifest و app icon فعال‌اند؛ نصب به قابلیت مرورگر کاربر وابسته است.</p><button type="button" onClick={installPwa}>Install App</button></div>
        <div><span className="world-kicker">Compliance</span><h3>Patient Rights & Legal</h3><p>منشور حقوق بیمار، مجوزها، گواهی‌ها و hotline فقط پس از دریافت نسخه رسمی منتشر می‌شوند.</p><a href="/contact">اطلاعات مراجعه</a></div>
        <div><span className="world-kicker">Languages</span><h3>FA · EN · AR</h3><p>فارسی فعال است؛ ترجمه کامل انگلیسی و عربی باید قبل از فعال‌سازی توسط انسان/پزشک بازبینی شود.</p><span className="language-status"><b>FA</b><i>EN</i><i>AR</i></span></div>
      </section>
    </div>
  );
}
