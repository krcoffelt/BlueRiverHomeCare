# Blue River Home Care Launch Checklist

Last updated: October 26, 2026

Technical evidence: `docs/seo/implementation-checklist-2026-10-26.txt` and the follow-up QA reports. Checked items describe verified implementation, not owner approval or legal certification.

## Client Confirmation

- [ ] Confirm whether the public site should show the main phone only or also Chris Jennen's direct number.
- [x] Confirm business hours: Monday–Friday, 9:00 AM–5:00 PM; weekends closed.
- [ ] Approve the exact public task/service list and excluded services.
- [ ] Confirm any licensing, bonding, insurance, caregiver screening, or training claims before publication.
- [ ] Confirm permission for Chris Jennen's headshot, which is already published in the existing homepage/About design.
- [ ] Provide approved testimonials or reviews before adding review content or schema.
- [ ] Provide final LinkedIn, Yelp, Facebook, and Instagram URLs.
- [ ] Confirm the privacy policy, contact consent, data-retention rules, and any future SMS opt-in language with appropriate counsel.

## Platform And Forms

- [x] Verify production hosting: the live domain is published by Netlify.
- [ ] Confirm the inquiry recipient and response workflow.
- [ ] If using Supabase, define the minimal lead schema and enable RLS so no lead data is publicly readable.
- [ ] If using Resend, verify the sender domain and approved email templates.
- [x] Verify the existing Netlify Forms configuration: `care-inquiry` is detected, the honeypot is enabled, and forms POST to `/thank-you/`. No endpoint change was needed; recipient/delivery approval remains below.
- [ ] Test successful submission, failed validation, spam handling, storage, notification, and thank-you redirect in production.

## Search And Analytics

- [x] Verify `https://blueriverhomecare.com/` as the canonical host; HTTP apex and HTTPS www redirect to it.
- [ ] Confirm the office NAP exactly matches Google Business Profile.
- [ ] Add the approved Google Business Profile link.
- [ ] Connect Google Search Console and submit `/sitemap-index.xml`.
- [ ] Connect Bing Webmaster Tools and submit `/sitemap-index.xml`.
- [ ] Add the approved verification tokens to `PUBLIC_GOOGLE_SITE_VERIFICATION` and `PUBLIC_BING_SITE_VERIFICATION`.
- [ ] Confirm approval for the existing GA4 property and consent behavior. `SiteAnalytics.astro` currently falls back to `G-J3QRJ5DGEF` when the environment variable is blank; blank does not disable tracking. No analytics change was made in the SEO work.
- [ ] Verify the implemented phone-click, consultation-click, form-submit, and completed-lead events in production.
- [ ] Add UTM capture only after the analytics approach is confirmed.
- [x] Preserve the October 25 SE Ranking snapshot, including Belton home care #8 desktop/mobile, in the ranking handoff.
- [ ] Review Search Console at 30, 60, and 90 days once owner access is available.

## Photography

- [ ] Approve or replace the current Squarespace-sourced lifestyle images.
- [ ] Obtain at least one original horizontal caregiver/home image.
- [ ] Avoid images that imply skilled nursing, clinical treatment, or medical services unless those services are confirmed.

## Final QA

- [x] Run a production mobile Lighthouse audit: performance 89, accessibility 100, best practices 100, SEO 100 in the first follow-up run. See `docs/seo/lighthouse-followup-2026-10-26.json`; a lab run does not establish field performance.
- [x] Parse all 32 built JSON-LD blocks and check graph/context/type structure, including LocalBusiness, Service, FAQPage, BreadcrumbList and Article. This does not certify Google rich-result eligibility or verify owner facts.
- [x] Complete keyboard spot checks for skip-to-main and mobile/desktop navigation; inspect the accessibility tree and run automated WCAG checks on seven key routes.
- [ ] Complete a human screen-reader session (VoiceOver/NVDA); automated checks and accessibility-tree inspection do not replace it.
- [x] Verify homepage layout at 320px, 360px, 390px, 768px, 1024px and 1440px; prior route/viewport checks are recorded in the SEO evidence.
- [ ] Finish real inquiry delivery/notification verification. Phone/email/map destinations, required fields and consent, sitemap/canonical URLs, robots, redirects, 404 and noindexed thank-you were checked without submitting a lead.
- [ ] Confirm no `TODO_CONFIRM` facts have entered public copy.

- [x] Disable the per-project Powered by Netlify badge and verify the mobile contact bar is unobstructed for visitors. No billing/visibility change.
