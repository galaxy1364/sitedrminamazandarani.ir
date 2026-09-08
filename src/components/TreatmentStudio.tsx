"use client";

import { useState } from "react";

const treatments = [
  {
    id: "implant",
    label: "ایمپلنت",
    kicker: "Implant Protocol",
    title: "از ارزیابی استخوان تا بازسازی نهایی، مرحله‌به‌مرحله",
    text: "این نمایش برای توضیح مسیر درمان طراحی شده است؛ تصمیم بالینی واقعی فقط پس از معاینه و بررسی تصویربرداری انجام می‌شود.",
    steps: ["ارزیابی", "برنامه‌ریزی", "جراحی", "بازسازی", "پیگیری"],
    accent: "violet"
  },
  {
    id: "surgery",
    label: "جراحی",
    kicker: "Surgical Care",
    title: "مسیر جراحی با توضیح روشن قبل، حین و بعد از درمان",
    text: "هدف این بخش کاهش ابهام بیمار و نمایش ساختار مراقبت است؛ جزئیات درمان بر اساس شرایط فردی تعیین می‌شود.",
    steps: ["شرح حال", "تصویربرداری", "طرح درمان", "جراحی", "کنترل"],
    accent: "mint"
  },
  {
    id: "aesthetic",
    label: "زیبایی",
    kicker: "Smile Design",
    title: "طراحی لبخند با اولویت حفظ ساختار طبیعی و تناسب چهره",
    text: "به‌جای وعده نتیجه یکسان، مسیر تصمیم‌گیری و گزینه‌های درمانی پس از ارزیابی فردی توضیح داده می‌شوند.",
    steps: ["آنالیز", "اهداف", "گزینه‌ها", "اجرا", "بازبینی"],
    accent: "rose"
  },
  {
    id: "restore",
    label: "بازسازی",
    kicker: "Restorative Workflow",
    title: "بازگشت عملکرد و فرم با یک workflow قابل‌فهم",
    text: "این تجربه تعاملی برای توضیح روند کلی درمان است و جایگزین تشخیص، معاینه یا توصیه اختصاصی پزشک نیست.",
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
            <span className="eyebrow">Interactive Clinical Experience</span>
            <h2 id="studio-title">Treatment Studio</h2>
          </div>
          <p>یک تجربه تعاملی برای فهم بهتر مسیر درمان؛ بدون ادعای تشخیص آنلاین و بدون نمایش نتیجه ساختگی.</p>
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
            <a className="primary studio-cta" href="#appointment">درخواست ارزیابی تخصصی</a>
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
            <div className="metric-chip chip-one"><small>Workflow</small><strong>Adaptive</strong></div>
            <div className="metric-chip chip-two"><small>Clinical data</small><strong>Pending integration</strong></div>
            <div className="metric-chip chip-three"><small>Patient safety</small><strong>Doctor-led</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
