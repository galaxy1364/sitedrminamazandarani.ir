import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer section-pad" aria-label="پاورقی سایت">
      <div>
        <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">M</span><span>{site.doctor}<small>{site.specialty}</small></span></div>
        <p>اطلاعات آموزشی این وب‌سایت جایگزین معاینه، تشخیص یا توصیه اختصاصی پزشک نیست.</p>
      </div>
      <div>
        <b>دسترسی سریع</b>
        <Link href="/services">خدمات تخصصی</Link>
        <Link href="/about">درباره پزشک</Link>
        <Link href="/articles">آموزش بیمار</Link>
        <Link href="/contact">تماس و مراجعه</Link>
      </div>
      <div>
        <b>اطلاعات مراجعه</b>
        <span>نشانی، تلفن و ساعات کاری پس از تأیید رسمی منتشر می‌شوند.</span>
        <Link href="/#appointment">وضعیت درخواست نوبت</Link>
      </div>
    </footer>
  );
}
