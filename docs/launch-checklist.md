# Blue River Home Care Launch Checklist

Last updated: July 10, 2026

## Client Confirmation

- [ ] Confirm whether the public site should show the main phone only or also Chris Jennen's direct number.
- [ ] Confirm business hours and after-hours/on-call language.
- [ ] Approve the exact public task/service list and excluded services.
- [ ] Confirm any licensing, bonding, insurance, caregiver screening, or training claims before publication.
- [ ] Approve use of Chris Jennen's headshot. It remains stored in the repository but is not published in the expanded build.
- [ ] Provide approved testimonials or reviews before adding review content or schema.
- [ ] Provide final LinkedIn, Yelp, Facebook, and Instagram URLs.
- [ ] Confirm the privacy policy, contact consent, data-retention rules, and any future SMS opt-in language with appropriate counsel.

## Platform And Forms

- [ ] Confirm production hosting platform.
- [ ] Confirm the inquiry recipient and response workflow.
- [ ] If using Supabase, define the minimal lead schema and enable RLS so no lead data is publicly readable.
- [ ] If using Resend, verify the sender domain and approved email templates.
- [ ] Replace or configure `PUBLIC_CONTACT_FORM_ENDPOINT` for the selected platform.
- [ ] Test successful submission, failed validation, spam handling, storage, notification, and thank-you redirect in production.

## Search And Analytics

- [ ] Verify the production domain and canonical host.
- [ ] Confirm the office NAP exactly matches Google Business Profile.
- [ ] Add the approved Google Business Profile link.
- [ ] Connect Google Search Console and submit `/sitemap-index.xml`.
- [ ] Connect Bing Webmaster Tools and submit `/sitemap-index.xml`.
- [ ] Add the approved verification tokens to `PUBLIC_GOOGLE_SITE_VERIFICATION` and `PUBLIC_BING_SITE_VERIFICATION`.
- [ ] Approve GA4 and set `PUBLIC_GA_MEASUREMENT_ID` in production, or leave it blank.
- [ ] Verify the implemented phone-click, consultation-click, form-submit, and completed-lead events in production.
- [ ] Add UTM capture only after the analytics approach is confirmed.
- [ ] Record baseline rankings for Belton and Kansas City home-care terms, then review Search Console at 30, 60, and 90 days.

## Photography

- [ ] Approve or replace the current Squarespace-sourced lifestyle images.
- [ ] Obtain at least one original horizontal caregiver/home image.
- [ ] Avoid images that imply skilled nursing, clinical treatment, or medical services unless those services are confirmed.

## Final QA

- [ ] Run a production Lighthouse audit on the deployed domain.
- [ ] Validate LocalBusiness, Service, FAQPage, and BreadcrumbList JSON-LD.
- [ ] Complete keyboard-only and screen-reader spot checks.
- [ ] Verify 360px, 390px, 768px, 1024px, and 1440px layouts.
- [ ] Verify phone, email, map, form, redirect, sitemap, robots, 404, and thank-you behavior.
- [ ] Confirm no `TODO_CONFIRM` facts have entered public copy.
