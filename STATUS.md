# STATUS

## Authoritative path
- Repository: `galaxy1364/sitedrminamazandarani.ir`
- Branch: `main`
- Vercel project: `sitedrminamazandarani-clinic`
- Current public alias: `https://sitedrminamazandarani-clinic.vercel.app`
- Old parallel Vercel project: deleted by user

## Implemented
- Persian RTL responsive site with shared navigation/footer
- Premium pastel/glass/aurora visual system
- Hero, services, treatment studio, care journey, patient education, FAQ and contact routes
- Real site routes: `/services`, `/about`, `/articles`, `/contact`
- Four conceptual visual assets integrated under `public/visuals/`
- Above-the-fold conceptual media moved to `next/image` where applicable
- Concept imagery explicitly disclosed and not represented as real patient outcomes
- Appointment UI changed to privacy-first offline state: no name, phone or medical note collection before approved backend
- Appointment API returns 503 without parsing request body and uses `Cache-Control: no-store`
- Shared evidence-safe patient-facing copy; engineering/debug language removed from main UX
- WCAG-oriented skip link, visible focus, target sizing, reduced motion and mobile safe-area handling
- Mobile dock receives safe-area spacing and page scroll padding to reduce focus/content obstruction
- Security response headers: `nosniff`, strict-origin referrer policy, SAMEORIGIN frame policy and restrictive camera/microphone/geolocation permissions
- SEO metadata helper with route-specific canonicals
- Preview indexing guarded until `NEXT_PUBLIC_SITE_URL` is explicitly configured
- WebSite / Person / Organization JSON-LD with only verified facts
- Dynamic sitemap/robots URL derived from configured site URL
- Web app manifest and SVG icon
- GitHub Actions quality workflow remains the production quality gate

## 2026 global-audit targets
- WCAG 2.2 AA baseline, with selected AAA-oriented ergonomics such as 44px target sizing where practical
- Core Web Vitals targets: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 at p75; source optimizations applied but field/lab metrics still require measurement
- Patient-facing content must not expose internal integration/debug terminology
- No indexing of an unverified temporary production identity
- No patient-data collection until privacy/security/backend controls exist

## Awaiting verification
- Latest GitHub Actions run for the exact current `main` commit
- Latest Vercel deployment status for the exact current `main` commit
- Browser/runtime QA of the post-audit build
- Lab/field Core Web Vitals measurements
- Custom-domain DNS/TLS and `NEXT_PUBLIC_SITE_URL`

## STOP_BLOCKER
- Do not activate patient-data collection or appointment persistence until the clinic scheduling API/database, privacy policy, access control, retention and security requirements are approved.
- Do not activate AI chat until a verified knowledge source/provider and credentials exist.
- Do not publish invented address, phone, hours, qualifications, testimonials or patient outcomes.
- Do not claim custom-domain SEO/indexing readiness until DNS/TLS and canonical URL are verified.

## Current resume point
Run CI/build verification for the latest `main`, confirm the Vercel deployment, then perform runtime/mobile/route QA. Only after those pass should custom-domain activation be the next deployment step.
