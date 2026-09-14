export function ReservationForm() {
  return (
    <section className="reservation reservation-offline" aria-labelledby="reservation-title">
      <span className="reservation-status" aria-hidden="true">●</span>
      <h3 id="reservation-title">رزرو آنلاین در حال راه‌اندازی است</h3>
      <p>
        برای جلوگیری از دریافت ناقص یا غیرایمن اطلاعات بیمار، تا زمان اتصال سامانه رسمی نوبت‌دهی هیچ نام، شماره تماس یا توضیح پزشکی از این صفحه دریافت و ذخیره نمی‌شود.
      </p>
      <div className="reservation-safe-list" aria-label="وضعیت فعلی رزرو">
        <span>بدون دریافت اطلاعات پزشکی</span>
        <span>بدون تأیید نوبت ساختگی</span>
        <span>فعال‌سازی پس از اتصال سامانه رسمی</span>
      </div>
      <a className="ghost reservation-contact" href="/contact">مشاهده اطلاعات مراجعه</a>
    </section>
  );
}
