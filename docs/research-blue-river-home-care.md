# Blue River Home Care Research Notes

Last updated: July 9, 2026

## July 10 Build Status

The expanded Astro specification has been implemented in the workspace. The build now includes the full launch sitemap, reusable components, content collections, eight unique service-area pages, three planning resources, conservative schema, a static form adapter, XML sitemap, robots file, legacy consultation redirect, and responsive mobile conversion controls.

Unconfirmed experience, response-time, around-the-clock care, medical, Medicare, licensing, screening, review, and detailed task-list claims were removed from public copy. Remaining approvals and production integration work are tracked in `docs/launch-checklist.md`.

## Source Coverage

- Gmail thread from Chris Jennen on July 1, 2026: final logo assets, main services, and Facebook access note.
- Gmail email "Items for Blue River Home Care" from May 21, 2026: contact info, service area, social setup status, Supabase/Resend status, Chris photo, and avatar document.
- Current public website pages:
  - https://www.blueriverhomecare.com/
  - https://www.blueriverhomecare.com/about
  - https://www.blueriverhomecare.com/services
  - https://www.blueriverhomecare.com/faq
  - https://www.blueriverhomecare.com/book-a-consultation
- Google Drive search for "Blue River Home Care" and "Blue River" did not surface useful website collateral. It did surface a likely credentials sheet, which was not opened because credentials are not needed for this static foundation.

## Confirmed Business Facts

- Company: Blue River Home Care
- Primary contact: Chris Jennen, Director of Operations
- Email: chris@blueriverhomecare.com
- Main phone: (816) 641-2881
- Direct phone: (816) 291-3734
- Address: 8420 Clint Drive, Ste D, Belton, MO 64012
- Market positioning: Kansas City, Missouri provider
- Experience message: care industry experience since 2005
- Current service area: Kansas City, Lee's Summit, Greenwood, Raytown, Grandview, Belton, Raymore, Independence

## Service Foundation

Primary services from Gmail:

- In-home caregiving, currently framed as private pay.
- Consultation, described as a free phone or in-person conversation to determine next steps and potential services.
- Other payor sources, such as Veterans options, are determined during consultation.

Routine services from the current site:

- Personal care: dressing, grooming, bathing, mobility, toileting, transfers, and walking assistance.
- Homemaking: meals, dishes, floors, bathrooms, errands, transportation, trash, laundry, making the bed, and changing sheets.
- Companionship: safety, friendship, and social engagement during scheduled care hours.

## Assets Collected

Gmail-sourced brand assets:

- `src/assets/brand/logo-header.png`
- `src/assets/brand/logo-header.jpg`
- `src/assets/brand/logo-mobile.png`
- `src/assets/brand/logo-mobile.jpg`
- `src/assets/brand/logo-primary.jpg`
- `src/assets/brand/monogram.png`
- `src/assets/brand/monogram.jpg`
- `src/assets/brand/chris-jennen.png`

Public website images scraped from Squarespace:

- `src/assets/scraped/home-hero-caregiver.jpg`
- `src/assets/scraped/home-consultation.jpg`
- `src/assets/scraped/services-personal-care.jpg`
- `src/assets/scraped/about-family.jpg`
- `src/assets/scraped/about-caregiver.jpg`
- `src/assets/scraped/consultation-support.jpg`

Source document:

- `docs/Avatars.docx`

## Copy Direction

Visual thesis: calm local care with river-blue authority, warm human photography, and restrained trust-building detail.

Content plan:

- Hero: Blue River Home Care, local in-home care, clear call button.
- Support: consultation as the first helpful step.
- Detail: in-home caregiving, personal care, homemaking, companionship, and service area.
- Final CTA: call or text for consultation.

Interaction thesis:

- Quiet hero entrance and subtle image scale.
- Scroll-linked section reveals where supported.
- Button and link hover states that feel responsive without making the site feel busy.

## Open Items Before Final Launch

- Confirm final social links. Current Squarespace site still points social icons to Squarespace placeholders.
- Confirm whether the site should publish Chris direct phone or only main office phone.
- Confirm whether client avatar stories can be adapted publicly; do not publish names from `Avatars.docx` without approval.
- Replace scraped stock-style images with approved team, caregiver, office, or client-style photos when available.
- Decide whether Supabase and Resend are needed for a contact form, intake form, or CRM workflow.
