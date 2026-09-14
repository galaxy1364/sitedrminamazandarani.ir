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
- Patient-facing engineering/debug language removed from primary UX
- Appointment UI changed to privacy-first offline state: no name, phone or medical note collection before approved backend
- Appointment API returns 503 without parsing request body and uses `Cache-Control: no-store`
- WCAG-oriented skip link, visible focus, 44px interaction targets where practical, reduced motion and mobile safe-area handling
- Mobile dock receives safe-area spacing and page scroll padding to reduce focus/content obstruction
- Security response headers: `nosniff`, strict-origin referrer policy, SAMEORIGIN frame policy and restrictive camera/microphone/geolocation permissions
- SEO metadata helper with route-specific canonicals
- Preview indexing guarded until `NEXT_PUBLIC_SITE_URL` is explicitly configured
- WebSite / Person / Organization JSON-LD with only verified facts
- Dynamic sitemap/robots URL derived from configured site URL
- Web app manifest and SVG icon
- No new runtime dependencies added by this audit

## 2026 global-audit targets
- WCAG 2.2 AA baseline, with selected AAA-oriented ergonomics such as 44px target sizing where practical
- Core Web Vitals target thresholds: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 at p75
- Patient-facing content must not expose internal integration/debug terminology
- No indexing of an unverified temporary production identity
- No patient-data collection until privacy/security/backend controls exist

## Verified for audited source
- Audited source commit: `d9b755264f712c143cafaf8c442e89ff38173d8c`
- GitHub Actions Production Quality run #52 (`34838105836`): SUCCESS
- Dependency install: PASS
- TypeScript typecheck: PASS
- ESLint: PASS
- Next.js production build: PASS
- GitHub commit status `Vercel`: SUCCESS for the audited source commit

## NOT YET VERIFIED
- Runtime/browser fetch of the latest Vercel deployment from this connector; direct Vercel project/deployment lookup still returns an account/session mismatch/404 despite GitHub Vercel status success
- Lab or field Core Web Vitals measurements; source has been optimized but no metric score is claimed
- Cross-browser visual QA after the audited deployment
- Custom-domain DNS/TLS and `NEXT_PUBLIC_SITE_URL`
- Final address, phone, hours, legal/privacy and analytics-consent copy

## STOP_BLOCKER
- Do not activate patient-data collection or appointment persistence until the clinic scheduling API/database, privacy policy, access control, retention and security requirements are approved.
- Do not activate AI chat until a verified knowledge source/provider and credentials exist.
- Do not publish invented address, phone, hours, qualifications, testimonials or patient outcomes.
- Do not claim custom-domain SEO/indexing readiness until DNS/TLS and canonical URL are verified.
- Do not claim Core Web Vitals pass until measured at lab/field level.

## Current resume point
The audited source builds successfully and Vercel reports deployment success. Next: visual/runtime QA on the live alias, then custom-domain DNS/TLS + `NEXT_PUBLIC_SITE_URL`, then re-verify metadata/robots/sitemap and measure Core Web Vitals.
