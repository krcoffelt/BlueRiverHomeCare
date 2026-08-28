# Blue River Home Care SEO/GEO Audit

Audit date: August 28, 2026  
Scope: crawlability, indexation, page intent, titles, internal links, structured data, source citations, answer-first content, web search, and AI answer engines.

## Executive finding

The generated Astro site is technically crawlable and internally consistent. The main visibility constraint is not a broken tag or link: it is that search and answer engines have only partially processed the recently replaced site and have limited third-party evidence with which to corroborate the Blue River entity. The highest-leverage code-level gap was weak editorial provenance on the resource pages. That gap was fixed in this pass.

## Ranked gaps by expected impact

| Rank | Gap | Expected impact | Evidence | Status |
| --- | --- | --- | --- | --- |
| 1 | Search/answer-engine migration freshness and entity corroboration | Very high | Some web results still expose old production copy, new deep URLs were absent from sampled non-brand results, and Google AI Mode/Bing Copilot did not name Blue River for the Belton agency query. | Requires deployment, sitemap resubmission, recrawl time, and stronger third-party local profiles. |
| 2 | Weak resource provenance and citation signals | High | Before the fix, 0/4 resources emitted Article schema, 0/4 showed author or update metadata, and 3/4 had no in-content external source. | Fixed. |
| 3 | Uneven internal authority to editorial pages | Medium | The payment guide has 13 internal inbound links, while the consultation, private-pay, and timing guides have 2, 1, and 2 respectively. | Open. |
| 4 | Location-page differentiation is structurally repetitive | Medium | Eight city pages have unique paragraphs but share the same intent pattern and headings; stronger verified local proof would make each page more defensible. | Open; depends on approved facts, testimonials, and local evidence. |
| 5 | Brand/entity ambiguity | Medium | Brand searches can surface an unrelated UK company with the same name. The site has no approved `sameAs` profile URLs yet. | Open; confirm Google Business Profile and social URLs first. |
| 6 | Core technical SEO defects | Low | No broken internal links, missing canonicals, missing titles/descriptions, duplicate titles, invalid H1 counts, or schema-free indexable pages in the post-fix crawl. | Healthy. |

## Fix implemented

- Added author, publication date, update date, and required primary-source metadata to all four resources.
- Added Article JSON-LD with `datePublished`, `dateModified`, `author`, `publisher`, `mainEntityOfPage`, and `citation`.
- Added visible source lists backed primarily by Medicare.gov, the National Institute on Aging, Missouri state agencies, and the Department of Veterans Affairs.
- Strengthened answer-first summaries for payment and timing intent.
- Added a repeatable static-site crawler at `scripts/seo-audit.mjs` and the `npm run audit:seo` command.

## Crawl comparison

The same crawler and generated route set were used before and after the fix.

| Metric | Before | After |
| --- | ---: | ---: |
| Generated HTML files | 26 | 26 |
| Indexable content pages | 23 | 23 |
| Missing or duplicate titles | 0 | 0 |
| Missing descriptions | 0 | 0 |
| Missing canonicals | 0 | 0 |
| Invalid H1 counts | 0 | 0 |
| Broken internal links | 0 | 0 |
| Indexable pages without structured data | 0 | 0 |
| Resources without primary external sources | 3 | 0 |
| Resources with Article schema | 0/4 | 4/4 |

The redirect document and custom 404 are excluded from indexable-page defect counts.

## Target-query benchmark

Queries held constant:

1. `home care Belton MO`
2. `in-home caregiving Belton MO`
3. `companion care Belton MO`
4. `how to pay for home care Missouri`

Observed external visibility:

| Surface | Result before/after local fix |
| --- | --- |
| Google standard search, `home care Belton MO` | Blue River appeared in the local pack and as an organic homepage result. |
| Bing standard search, `home care Belton MO` | Blue River appeared as an organic homepage result. |
| Independent web-result sample across all four target queries | Blue River was absent from the returned non-brand result set; the payment query was led by established Missouri-specific guides and government sources. |
| Google AI Mode, `Which home care agencies serve Belton, Missouri? Cite sources.` | Blue River was not named or cited. |
| Bing Copilot Search, same prompt | Blue River was not named or cited. |
| Perplexity, same prompt | Anonymous run required sign-in before returning an answer, so no valid result was recorded. |

The external rerun is unchanged by design: search and AI engines see the deployed production site, not the local build. Movement should be measured after deployment and recrawl, not immediately after a code change.

## Recommended next actions

1. Deploy the fix, verify the canonical host, and resubmit `/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
2. Confirm and add the exact Google Business Profile URL plus approved social/profile URLs to LocalBusiness `sameAs` markup to disambiguate the Missouri business from the UK namesake.
3. Add contextual links to the three low-inbound resources from relevant service, FAQ, and location pages.
4. Re-run the same benchmark after confirmed recrawl, then at 30, 60, and 90 days using Search Console impressions/clicks as the primary ranking evidence.
