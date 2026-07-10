# Blue River Home Care

Production-oriented Astro website foundation for Blue River Home Care in Belton, Missouri.

## Stack

- Astro 7 with TypeScript and static output
- Astro content collections for planning resources
- `@astrojs/sitemap` for XML sitemap generation
- `astro:assets` for responsive AVIF/WebP images
- Native HTML forms, accordions, and mobile navigation
- Minimal inline JavaScript only for the post-hero mobile CTA
- Optional GA4 conversion events and search-engine verification through public environment variables

## Commands

```bash
npm install
npm run dev
npm run format:check
npm run check
npm run build
```

## Content Architecture

- `src/data/site.ts` contains confirmed NAP, contacts, navigation, privacy copy, and launch confirmations.
- `src/data/services.ts` contains the two confirmed service paths, process, and anonymized planning scenarios.
- `src/data/locations.ts` contains unique local content for eight Missouri service-area pages.
- `src/data/faqs.ts` contains conservative, confirmed-fact FAQ content.
- `src/content/resources/` contains educational Markdown articles.
- `src/components/` contains layout, SEO, section, form, and UI components.

## Form Adapter

The static form is Netlify Forms-compatible and redirects to `/thank-you/`. Set `PUBLIC_CONTACT_FORM_ENDPOINT` to an approved external or platform endpoint when hosting is selected.

Supabase and Resend credentials are intentionally not required by the static build. A production server endpoint should validate submissions, store only minimal inquiry data, and send the internal notification after hosting, schema, sender domain, and retention rules are confirmed.

## Search And Analytics

Set `PUBLIC_GOOGLE_SITE_VERIFICATION` and `PUBLIC_BING_SITE_VERIFICATION` to add ownership-verification meta tags. Set `PUBLIC_GA_MEASUREMENT_ID` to load GA4 and record phone clicks, consultation CTA clicks, inquiry form submissions, and completed leads on `/thank-you/`. Leave these values blank until the production properties and consent requirements are approved.

## Launch Status

See `docs/launch-checklist.md` for unresolved client approvals and technical launch work. Do not move `TODO_CONFIRM` items into public copy without explicit confirmation.
