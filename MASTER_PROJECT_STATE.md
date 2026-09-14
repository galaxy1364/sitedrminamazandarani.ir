# MASTER PROJECT STATE — Mina Mazandarani Dental Website

## Source of truth
GitHub repository `galaxy1364/sitedrminamazandarani.ir` on branch `main` is the authoritative implementation and audit trail.

## Production project
- Vercel project: `sitedrminamazandarani-clinic`
- Current public alias: `https://sitedrminamazandarani-clinic.vercel.app`
- The obsolete parallel Vercel project was deleted by the user.
- No parallel GitHub repository or implementation is permitted.

## Product objective
Production-grade Persian RTL dental website for Dr. Mina Mazandarani with evidence-safe service presentation, patient education, future online appointment integration, future AI guidance, SEO, accessibility and responsive premium UI.

## Non-negotiables
- No fake integrations, mock patient persistence, invented contact details, invented credentials, invented medical claims, invented testimonials or invented professional history.
- No patient/health data collection or persistence before approved backend, privacy policy, access controls, retention rules and transport security are verified.
- AI guidance must not perform unsupervised diagnosis or prescribe treatment.
- AI-generated treatment imagery must be disclosed as conceptual and never presented as a real patient outcome.
- All deployment, dependency, schema and integration changes require evidence and test results.
- Git history + this state file are the audit trail.

## Current architecture
- Next.js 16.3.3 / React 19.2.7 / TypeScript
- App Router
- CSS-first motion system; no new runtime dependencies added by the 2026 global audit
- Shared site header/footer components
- Next/Image for above-the-fold conceptual media
- Route reserved for appointment integration; currently rejects requests without parsing patient data
- Canonical URL controlled by `NEXT_PUBLIC_SITE_URL`; preview is not intended for indexing until a verified production domain is configured
- JSON-LD contains only verified WebSite / Person / Organization facts

## Current blockers
1. Final custom-domain DNS/TLS and `NEXT_PUBLIC_SITE_URL` are not yet verified/configured.
2. Clinic scheduling software/API and privacy/security requirements are not supplied.
3. AI knowledge source/provider and credentials are not supplied.
4. Final clinic address, phone, hours, legal/privacy copy and analytics-consent requirements are pending.
5. Real doctor/clinic/patient imagery has not yet been supplied; current treatment/clinic media are disclosed conceptual assets.

## Resume discipline
Before claiming production readiness, verify the latest GitHub Actions quality run and latest Vercel deployment for the exact `main` commit. Do not infer success from source changes alone.
