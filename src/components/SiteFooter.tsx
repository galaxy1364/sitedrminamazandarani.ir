import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer section-pad world-footer" aria-label="پاورقی سایت">
      <div>
        <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">M</span><span>{site.doctor}<small>{site.specialty}</small></span></div>
        <p>اطلاعات آموزشی این وب‌سایت جایگزین معاینه، تشخیص یا توصیه اختصاصی پزشک نیست. تصاویر مفهومی به‌عنوان نتیجه واقعی بیمار معرفی نمی‌شوند.</p>
        <span>FA فعال · EN / AR پس از بازبینی حرفه‌ای ترجمه فعال می‌شوند.</span>
      </div>
      <div>
        <b>دسترسی سریع</b>
        <Link href="/services">خدمات تخصصی</Link>
        <Link href="/#smile-simulator">3D Smile Lab</Link>
        <Link href="/#smart-care">AI & Telehealth</Link>
        <Link href="/#finance">هزینه و اقساط</Link>
        <Link href="/about">درباره پزشک</Link>
      </div>
      <div>
        <b>Patient & Compliance</b>
        <Link href="/#patient-portal">پرتال بیمار</Link>
        <Link href="/articles">آموزش بیمار</Link>
        <span>منشور حقوق بیمار، مجوزها و گواهی‌ها پس از دریافت نسخه رسمی منتشر می‌شوند.</span>
        <span>شماره اورژانس 24/7 فقط در صورت وجود سرویس واقعی درج خواهد شد.</span>
      </div>
      <div>
        <b>مراجعه و ارتباط</b>
        <Link href="/contact">تماس و مراجعه</Link>
        <Link href="/#arrival">مسیریابی و Smart Arrival</Link>
        <span>نشانی، تلفن، ساعات کاری و شبکه‌های اجتماعی پس از تأیید رسمی منتشر می‌شوند.</span>
      </div>
    </footer>
  );
}
