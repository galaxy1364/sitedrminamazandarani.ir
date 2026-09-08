"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "integration_pending" | "error";

export function ReservationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setStatus("sending");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });

      const body = await response.json().catch(() => null) as { code?: string } | null;
      if (response.status === 503 && body?.code === "CLINIC_INTEGRATION_NOT_CONFIGURED") {
        setStatus("integration_pending");
        return;
      }
      setStatus(response.ok ? "integration_pending" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="reservation" onSubmit={submit} aria-label="درخواست نوبت">
      <div className="field-grid">
        <label>نام و نام خانوادگی<input name="name" required autoComplete="name" minLength={2} maxLength={120} /></label>
        <label>شماره موبایل<input name="phone" required inputMode="tel" pattern="09[0-9]{9}" placeholder="09xxxxxxxxx" autoComplete="tel" /></label>
        <label>خدمت موردنظر<select name="service" required defaultValue=""><option value="" disabled>انتخاب خدمت</option><option>ایمپلنت</option><option>جراحی</option><option>زیبایی</option><option>ترمیم و روکش</option><option>ویزیت تخصصی</option></select></label>
        <label>زمان ترجیحی<select name="preferredTime" required defaultValue=""><option value="" disabled>انتخاب زمان</option><option>صبح</option><option>ظهر</option><option>عصر</option></select></label>
      </div>
      <label>توضیحات<textarea name="note" rows={4} maxLength={1000} placeholder="در صورت نیاز توضیح کوتاه بنویسید" /></label>
      <button className="primary" disabled={status === "sending"}>{status === "sending" ? "در حال بررسی…" : "درخواست نوبت"}</button>
      <p className="form-state" aria-live="polite">
        {status === "integration_pending" && "اطلاعات معتبر است، اما اتصال نهایی نرم‌افزار کلینیک هنوز فعال نشده و هیچ داده‌ای ذخیره نشد."}
        {status === "error" && "درخواست قابل بررسی نبود. لطفاً اطلاعات را کنترل کنید و دوباره تلاش کنید."}
      </p>
    </form>
  );
}
