# RESUME STATE

## Resume point
1. Source of truth is `galaxy1364/sitedrminamazandarani.ir` on `main`.
2. Only Vercel project to keep/use: `sitedrminamazandarani-clinic`.
3. Current public alias: `https://sitedrminamazandarani-clinic.vercel.app`.
4. Old parallel Vercel project has been deleted by the user.
5. 2026 global quality audit changes are committed in-place: patient-facing copy cleanup, privacy-first appointment state, Next/Image media, accessibility/safe-area polish, route-specific SEO, JSON-LD, manifest/icon and security headers.
6. Appointment endpoint currently returns 503 without parsing patient data. Do not re-enable collection until backend/privacy/security requirements are approved.
7. Preview indexing is guarded until `NEXT_PUBLIC_SITE_URL` is explicitly configured for a verified production domain.
8. Immediate next step: verify GitHub Actions + Vercel for the exact latest `main` commit, then runtime/mobile/routes QA.
9. After quality gates pass: connect and verify custom domain DNS/TLS, configure `NEXT_PUBLIC_SITE_URL`, then re-verify metadata/robots/sitemap.
10. Only after scheduling API details are supplied: implement clinic scheduling adapter and persistence.
11. Only after approved knowledge source/provider: implement AI guidance with medical-safety boundaries.

## Forbidden at resume
- No parallel repository or site project.
- No invented appointment confirmations or fake integrations.
- No patient data persistence or hidden demo storage.
- No invented address, phone, hours, qualifications, testimonials, treatment statistics or patient outcomes.
- No claim of build/deployment/runtime/Core Web Vitals success without evidence.
- No dependency, schema, native config, sync or AI-provider change without evidence and appropriate approval.
