"use client";

import { useState } from "react";

const treatments = [
  {
    id: "implant",
    label: "ایمپلنت",
    kicker: "Implant Care",
    title: "از ارزیابی تا بازسازی نهایی، مرحله‌به‌مرحله",
    text: "این نمایش برای توضیح مسیر کلی درمان طراحی شده است؛ تصمیم بالینی واقعی فقط پس از معاینه و بررسی تصویربرداری انجام می‌شود.",
    steps: ["ارزیابی", "برنامه‌ریزی", "جراحی", "بازسازی", "پیگیری"],
    accent: "violet"
  },
  {
    id: "surgery",
    label: "جراحی",
    kicker: "Surgical Care",
    title: "مسیر جراحی با توضیح روشن قبل و بعد از درمان",
    text: "جزئیات جراحی، مراقبت و زمان‌بندی بر اساس شرایط فردی و نظر پزشک تعیین می‌شوند.",
    steps: ["شرح حال", "تصویربرداری", "طرح درمان", "جراحی", "کنترل"],
    accent: "mint"
  },
  {
    id: "aesthetic",
    label: "زیبایی",
    kicker: "Smile Design",
    title: "طراحی لبخند با اولویت حفظ ساختار طبیعی",
    text: "گزینه‌های زیبایی پس از ارزیابی فردی، اهداف درمان و وضعیت بافت‌های دندانی بررسی می‌شوند.",
    steps: ["آنالیز", "اهداف", "گزینه‌ها", "اجرا", "بازبینی"],
    accent: "rose"
  },
  {
    id: "restore",
    label: "بازسازی",
    kicker: "Restorative Care",
    title: "بازگشت عملکرد و فرم با یک مسیر قابل‌فهم",
    text: "این تجربه روند کلی بازسازی را توضیح می‌دهد و جایگزین معاینه یا توصیه اختصاصی پزشک نیست.",
    steps: ["بررسی", "اولویت‌بندی", "درمان پایه", "بازسازی", "نگهداری"],
    accent: "sky"
  }
] as const;

export function TreatmentStudio() {
  const [activeId, setActiveId] = useState<(typeof treatments)[number]["id"]>("implant");
  const active = treatments.find((item) => item.id === activeId) ?? treatments[0];

  return (
    <section className="treatment-studio section-pad" aria-labelledby="studio-title">
      <div className="studio-shell">
        <div className="studio-heading">
          <div>
            <span className="eyebrow">Interactive Treatment Guide</span>
            <h2 id="studio-title">استودیو مسیر درمان</h2>
          </div>
          <p>یک تجربه تعاملی برای شناخت بهتر مراحل کلی درمان؛ بدون تشخیص آنلاین و بدون وعده نتیجه.</p>
        </div>

        <div className="studio-tabs" role="tablist" aria-label="انتخاب مسیر درمان">
          {treatments.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active.id === item.id}
              className={active.id === item.id ? "is-active" : ""}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.label}</span>
              <small>{item.kicker}</small>
            </button>
          ))}
        </div>

        <div className={`studio-stage accent-${active.accent}`} role="tabpanel" aria-live="polite">
          <div className="studio-copy">
            <span className="studio-kicker">{active.kicker}</span>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
            <div className="studio-steps">
              {active.steps.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <a className="primary studio-cta" href="/services">جزئیات خدمات</a>
          </div>

          <div className="studio-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="visual-halo halo-one" />
            <div className="visual-halo halo-two" />
            <div className="clinical-core">
              <div className="core-ring ring-a" />
              <div className="core-ring ring-b" />
              <div className="core-tooth"><span>✦</span></div>
            </div>
            <div className="metric-chip chip-one"><small>رویکرد</small><strong>پزشک‌محور</strong></div>
            <div className="metric-chip chip-two"><small>هدف</small><strong>آموزش بیمار</strong></div>
            <div className="metric-chip chip-three"><small>ایمنی</small><strong>بدون تشخیص آنلاین</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
