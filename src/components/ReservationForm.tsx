"use client";

import { FormEvent, useState } from "react";

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setStatus("sending");

    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });

    setStatus(response.ok ? "sent" : "error");
  }

  return (
    <form className="reservation" onSubmit={submit} aria-label="درخواست نوبت">
      <div className="field-grid">
        <label>نام و نام خانوادگی<input name="name" required autoComplete="name" /></label>
        <label>شماره موبایل<input name="phone" required inputMode="tel" pattern="09[0-9]{9}" placeholder="09xxxxxxxxx" /></label>
        <label>خدمت موردنظر<select name="service" required defaultValue=""><option value="" disabled>انتخاب خدمت</option><option>ایمپلنت</option><option>جراحی</option><option>زیبایی</option><option>ترمیم و روکش</option><option>ویزیت تخصصی</option></select></label>
        <label>زمان ترجیحی<select name="preferredTime" required defaultValue=""><option value="" disabled>انتخاب زمان</option><option>صبح</option><option>ظهر</option><option>عصر</option></select></label>
      </div>
      <label>توضیحات<textarea name="note" rows={4} maxLength={1000} placeholder="در صورت نیاز توضیح کوتاه بنویسید" /></label>
      <button className="primary" disabled={status === "sending"}>{status === "sending" ? "در حال ثبت…" : "درخواست نوبت"}</button>
      <p className="form-state" aria-live="polite">
        {status === "sent" && "درخواست اولیه ثبت شد. اتصال نهایی به سیستم کلینیک پس از دریافت API فعال می‌شود."}
        {status === "error" && "ثبت درخواست انجام نشد. دوباره تلاش کنید."}
      </p>
    </form>
  );
}
