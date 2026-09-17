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
    detail: "مرور آموزشی مسیر ارزیابی، تصویربرداری، طرح درمان و بازسازی. تصمیم نهایی درمان فقط پس از معاینه پزشک انجام می‌شود."
  },
  veneer: {
    title: "طراحی لبخند",
    subtitle: "Smile design",
    detail: "نمایش آموزشی فرم و رنگ برای گفت‌وگوی بهتر با پزشک؛ این ابزار نتیجه درمان را پیش‌بینی نمی‌کند."
  },
  endo: {
    title: "درمان ریشه",
    subtitle: "Endodontic pathway",
    detail: "مرور آموزشی ساختار دندان و مراحل معمول ارزیابی درد؛ این ابزار تشخیص پزشکی نیست."
  },
  restorative: {
    title: "ترمیم و روکش",
    subtitle: "Restorative workflow",
    detail: "مرور آموزشی بازسازی فرم و عملکرد دندان با تأکید بر ارزیابی بالینی و حفظ بافت سالم."
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
  const [zoom, setZoom] = useState(108);
  const [amount, setAmount] = useState("120000000");
  const [months, setMonths] = useState(6);
  const [currency, setCurrency] = useState<Currency>("تومان");
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installMessage, setInstallMessage] = useState("نصب PWA به پشتیبانی مرورگر بستگی دارد.");

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
      setInstallMessage("این مرورگر نصب مستقیم وب‌اپ را پشتیبانی می‌کند.");
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installment = useMemo(() => {
    const parsed = Number(amount.replace(/[^0-9.]/g, ""));
    if (!Number.isFinite(parsed) || parsed <= 0 || months <= 0) return 0;
    return parsed / months;
  }, [amount, months]);

  const chooseTooth = (treatment: TreatmentKey) => {
    setSelectedTreatment(treatment);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(7);
  };

  const installPwa = async () => {
    if (!installPrompt) {
      setInstallMessage("اگر دکمه نصب مرورگر ظاهر نیست، از Add to Home Screen / Install App در منوی مرورگر استفاده کنید.");
      return;
    }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setInstallMessage(choice.outcome === "accepted" ? "درخواست نصب به مرورگر ارسال شد." : "نصب توسط کاربر لغو شد.");
    setInstallPrompt(null);
  };

  const formatAmount = (value: number) => value > 0
    ? new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value)
    : "—";

  const zoomStyle = { "--visual-scale": zoom / 100 } as CSSProperties;

  return (
    <div className="world-platform" aria-label="ابزارهای تعاملی واقعی سایت">
      <section id="smile-simulator" className="world-section spatial-clinical" aria-labelledby="spatial-title">
        <div className="world-section-head">
          <div>
            <span className="world-kicker">Interactive Treatment Map</span>
            <h2 id="spatial-title">نقشه تعاملی درمان؛ واقعی در مرورگر، آموزشی در کاربرد</h2>
          </div>
          <p>روی دندان‌ها بزنید تا مسیر آموزشی مرتبط نمایش داده شود. همه تعامل‌ها داخل مرورگر اجرا می‌شوند و هیچ داده‌ای ارسال یا ذخیره نمی‌شود.</p>
        </div>

        <div className="spatial-grid">
          <div className="jaw-console" aria-label="نقشه تعاملی دندان‌ها">
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
                  aria-pressed={selectedTreatment === tooth.treatment}
                  aria-label={`دندان ${tooth.label}: ${treatments[tooth.treatment].title}`}
                >
                  <span aria-hidden="true">◊</span>
                  <small>{tooth.label}</small>
                </button>
              ))}
            </div>
            <div className="jaw-core" aria-hidden="true"><span>✦</span></div>
            <div className="spatial-readout" aria-live="polite">
              <small>{treatments[selectedTreatment].subtitle}</small>
              <strong>{treatments[selectedTreatment].title}</strong>
              <p>{treatments[selectedTreatment].detail}</p>
            </div>
          </div>

          <aside className="shade-console" aria-label="راهنمای آموزشی انتخاب رنگ">
            <span className="world-kicker">Digital Shade Preview</span>
            <h3>انتخابگر آموزشی رنگ</h3>
            <p>انتخاب شما فقط در state همین صفحه نگه داشته می‌شود و به سرور ارسال نمی‌شود. تعیین بالینی رنگ باید در نور و شرایط استاندارد انجام شود.</p>
            <div className="shade-preview" style={{ background: shades.find(([code]) => code === shade)?.[1] }}>
              <span>{shade}</span>
            </div>
            <div className="shade-row" role="group" aria-label="انتخاب رنگ آموزشی">
              {shades.map(([code, color]) => (
                <button key={code} type="button" className={shade === code ? "is-active" : ""} onClick={() => setShade(code)} aria-pressed={shade === code}>
                  <i style={{ background: color }} aria-hidden="true" /><span>{code}</span>
                </button>
              ))}
            </div>
            <div className="privacy-chip">Local-only · بدون ارسال داده</div>
          </aside>
        </div>
      </section>

      <section id="visual-explorer" className="world-section comparison-section" aria-labelledby="visual-explorer-title">
        <div className="world-section-head">
          <div><span className="world-kicker">Clinical Visual Explorer</span><h2 id="visual-explorer-title">نمایشگر تعاملی تصویر مفهومی</h2></div>
          <p>این ابزار واقعاً zoom را در مرورگر تغییر می‌دهد. تصویر مفهومی است و به‌عنوان Before/After یا نتیجه درمان بیمار معرفی نمی‌شود.</p>
        </div>
        <div className="comparison-layout">
          <div className="comparison-window" style={zoomStyle}>
            <Image src="/visuals/before-after.webp" alt="نمای مفهومی آموزشی دندان و لثه" fill sizes="(max-width: 900px) 100vw, 62vw" className="comparison-base" style={{ transform: `scale(${zoom / 100})` }} />
            <span className="concept-seal">تصویر مفهومی — نتیجه بیمار نیست</span>
          </div>
          <div className="comparison-control">
            <label htmlFor="zoom-range">بزرگ‌نمایی <strong>{zoom}٪</strong></label>
            <input id="zoom-range" type="range" min="100" max="145" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} />
            <div className="comparison-features"><span>Local interaction</span><span>No upload</span><span>No patient data</span></div>
          </div>
        </div>
      </section>

      <section id="finance" className="world-section finance-suite" aria-labelledby="finance-title">
        <div className="world-section-head">
          <div><span className="world-kicker">Local Calculator</span><h2 id="finance-title">محاسبه‌گر واقعی تقسیم مبلغ</h2></div>
          <p>این ابزار فقط یک محاسبه ریاضی داخل مرورگر انجام می‌دهد. قیمت درمان، سود، کارمزد، بیمه یا قرارداد اقساط را تعیین نمی‌کند.</p>
        </div>
        <div className="finance-grid">
          <article className="installment-card">
            <span className="world-kicker">Installment Math</span><h3>تقسیم مبلغ بر تعداد ماه</h3>
            <label>مبلغ ورودی<input value={amount} inputMode="decimal" onChange={(event) => setAmount(event.target.value)} aria-label="مبلغ" /></label>
            <div className="inline-fields">
              <label>تعداد ماه<select value={months} onChange={(event) => setMonths(Number(event.target.value))}><option value={3}>۳</option><option value={6}>۶</option><option value={9}>۹</option><option value={12}>۱۲</option></select></label>
              <label>واحد<select value={currency} onChange={(event) => setCurrency(event.target.value as Currency)}>{currencies.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
            </div>
            <div className="installment-result"><span>تقسیم ساده ماهانه</span><strong>{formatAmount(installment)} <small>{currency}</small></strong></div>
            <p>محاسبه فقط در حافظه همین صفحه انجام می‌شود و هیچ اطلاعات مالی به سرور ارسال نمی‌شود.</p>
          </article>
        </div>
      </section>

      <section className="world-section compliance-strip" aria-label="قابلیت نصب وب اپ">
        <div>
          <span className="world-kicker">PWA</span>
          <h3>نصب وب‌اپ</h3>
          <p>{installMessage}</p>
          <button type="button" onClick={installPwa}>Install App</button>
        </div>
        <div>
          <span className="world-kicker">Privacy</span>
          <h3>حداقل‌سازی داده</h3>
          <p>ابزارهای این بخش بدون ارسال نام، شماره تماس، تصویر پزشکی یا پرونده سلامت کار می‌کنند.</p>
        </div>
        <div>
          <span className="world-kicker">Language</span>
          <h3>فارسی فعال</h3>
          <p>نسخه عمومی فعلی فقط فارسی است تا زبان‌های نیمه‌کاره یا ترجمه‌نشده به‌عنوان قابلیت فعال نمایش داده نشوند.</p>
        </div>
      </section>
    </div>
  );
}
