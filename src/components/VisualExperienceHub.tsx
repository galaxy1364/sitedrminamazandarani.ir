import Image from "next/image";
import Link from "next/link";

const visuals = [
  {
    href: "/services",
    src: "/visuals/hero-implant.webp",
    alt: "تصویر مفهومی ایمپلنت و درمان دیجیتال",
    title: "ایمپلنت و بازسازی",
    text: "مرور تصویری مسیر درمان پیش از ارزیابی تخصصی",
    position: "68% center"
  },
  {
    href: "/articles",
    src: "/visuals/ai-assistant.webp",
    alt: "تصویر مفهومی راهنمای دیجیتال بیمار",
    title: "راهنمای دیجیتال",
    text: "محتوای آموزشی برای پرسش‌های عمومی و آمادگی مراجعه",
    position: "22% center"
  },
  {
    href: "/services#treatment-story",
    src: "/visuals/before-after.webp",
    alt: "تصویر مفهومی روایت مرحله‌ای درمان",
    title: "روایت درمان",
    text: "نمایش مفهومی مراحل؛ نه نتیجه واقعی بیمار",
    position: "center"
  },
  {
    href: "/contact",
    src: "/visuals/clinic-interior.webp",
    alt: "تصویر مفهومی فضای کلینیک",
    title: "تجربه مراجعه",
    text: "فضای بصری مفهومی تا زمان جایگزینی با عکس‌های واقعی مرکز",
    position: "center"
  }
] as const;

export function VisualExperienceHub() {
  return (
    <section className="visual-hub" aria-labelledby="visual-hub-title">
      <div className="visual-hub-head">
        <div>
          <span className="eyebrow">Treatment Experience</span>
          <h2 id="visual-hub-title">درمان را قبل از تصمیم‌گیری بهتر بشناسید</h2>
        </div>
        <p>تصاویر این بخش مفهومی‌اند و برای توضیح تجربه درمان و مسیر مراجعه استفاده می‌شوند؛ هیچ‌کدام نتیجه واقعی بیمار نیستند.</p>
      </div>

      <div className="visual-hub-grid">
        {visuals.map((item, index) => (
          <Link className="visual-tile" href={item.href} key={item.title}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={index === 0 || index === 3 ? "(max-width: 900px) 100vw, 34vw" : "(max-width: 900px) 50vw, 20vw"}
              style={{ objectFit: "cover", objectPosition: item.position }}
            />
            <span className="visual-tile-overlay" aria-hidden="true" />
            <span className="visual-tile-copy">
              <small>تصویر مفهومی</small>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </span>
          </Link>
        ))}
      </div>

      <nav className="site-section-links" aria-label="مسیرهای اصلی سایت">
        <Link href="/services"><span>خدمات تخصصی</span><span aria-hidden="true">↗</span></Link>
        <Link href="/about"><span>درباره پزشک</span><span aria-hidden="true">↗</span></Link>
        <Link href="/articles"><span>آموزش بیمار</span><span aria-hidden="true">↗</span></Link>
        <Link href="/contact"><span>تماس و مراجعه</span><span aria-hidden="true">↗</span></Link>
      </nav>
    </section>
  );
}
