export function VisualExperienceHub(){
  return <section className="visual-hub" aria-labelledby="visual-hub-title">
    <div className="visual-hub-head">
      <div><span className="eyebrow">Visual Experience System</span><h2 id="visual-hub-title">همه طراحی‌های ساخته‌شده، حالا داخل خود سایت</h2></div>
      <p>چهار دارایی تصویری اصلی در Hero، درمان، AI و فضای کلینیک استفاده می‌شوند و صفحات مستقل طراحی‌شده نیز به ساختار واقعی سایت متصل شده‌اند.</p>
    </div>
    <div className="visual-hub-grid">
      <a className="visual-tile visual-implant" data-label="Implant Visual" href="/services" aria-label="خدمات و تصویر مفهومی ایمپلنت" />
      <a className="visual-tile visual-ai" data-label="AI Concierge" href="/articles" aria-label="مرکز آموزش و دستیار هوشمند" />
      <a className="visual-tile visual-before" data-label="Treatment Story" href="#experience" aria-label="داستان تصویری درمان" />
      <a className="visual-tile visual-clinic" data-label="Clinic Experience" href="/contact" aria-label="فضای مفهومی کلینیک و تماس" />
    </div>
    <div className="site-section-links" aria-label="صفحات اصلی سایت">
      <a href="/services"><span>خدمات تخصصی</span><span>↗</span></a>
      <a href="/about"><span>درباره پزشک</span><span>↗</span></a>
      <a href="/articles"><span>مقالات و آموزش</span><span>↗</span></a>
      <a href="/contact"><span>تماس و مراجعه</span><span>↗</span></a>
    </div>
  </section>
}
