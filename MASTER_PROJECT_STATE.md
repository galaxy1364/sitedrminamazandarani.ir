# MASTER PROJECT STATE — Mina Mazandarani Dental Website

## Source of truth
GitHub repository `galaxy1364/sitedrminamazandarani.ir` is the authoritative implementation and audit trail.

## Product objective
Production-grade Persian RTL dental clinic website for Dr. Mina Mazandarani with modern service presentation, online appointment workflow, future clinic-software integration, AI concierge, SEO, analytics, and accessible responsive UI.

## Non-negotiables
- No fake integrations, mock patient persistence, or invented credentials.
- No patient/health data persistence before approved backend, privacy policy, access controls, retention rules, and transport security are verified.
- AI concierge must not perform unsupervised diagnosis or prescribe treatment.
- All deployment and schema/integration changes require evidence and test results.
- Git history + this state file are the audit trail.

## Current architecture
- Next.js 16.3.3 / React 19.2.7 / TypeScript
- App Router
- Server route reserved for appointment integration
- CSS-only motion baseline to minimize dependency surface

## Current blockers
1. Package dependencies/build are not yet verified in a CI-capable environment.
2. Clinic scheduling software/API is unknown.
3. AI knowledge source/provider and credentials are not supplied.
4. Final clinic address, phone, domain DNS state, legal/privacy copy, and analytics-consent requirements are pending.
5. Production deployment target is not yet connected/verified.
