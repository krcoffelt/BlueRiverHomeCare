import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? "dist");
const output = process.argv[3];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory()
        ? htmlFiles(target)
        : entry.name.endsWith(".html")
          ? [target]
          : [];
    }),
  );
  return files.flat();
}

function textContent(value = "") {
  return value
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:nbsp|amp|quot|#39);/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

function tagAttribute(html, tagName, identifyingAttribute, targetAttribute) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) ?? [];
  const attribute = (tag, name) =>
    tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i"))?.[2] ?? "";
  const tag = tags.find((candidate) => identifyingAttribute(candidate, attribute));
  return tag ? attribute(tag, targetAttribute) : "";
}

function routeFor(file) {
  const relative = path.relative(root, file).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  if (relative === "404.html") return "/404.html";
  return `/${relative.replace(/index\.html$/, "")}`;
}

const pages = [];
for (const file of await htmlFiles(root)) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  const title = textContent(firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
  const description = tagAttribute(
    html,
    "meta",
    (tag, attribute) => attribute(tag, "name").toLowerCase() === "description",
    "content",
  );
  const canonical = tagAttribute(
    html,
    "link",
    (tag, attribute) => attribute(tag, "rel").toLowerCase() === "canonical",
    "href",
  );
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    textContent(m[1]),
  );
  const links = [...html.matchAll(/<a\b[^>]*href=["']([^"'#]+)["']/gi)].map(
    (m) => m[1],
  );
  const internalLinks = links.filter((href) => href.startsWith("/"));
  const externalLinks = links.filter((href) => /^https?:\/\//.test(href));
  const main = firstMatch(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const mainExternalLinks = [
    ...main.matchAll(/<a\b[^>]*href=["'](https?:\/\/[^"']+)["']/gi),
  ].map((m) => m[1]);
  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  pages.push({
    route,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    canonical,
    h1s,
    wordCount: textContent(main).split(/\s+/).filter(Boolean).length,
    internalLinks: [...new Set(internalLinks)],
    externalLinks: [...new Set(externalLinks)],
    sourceLinks: [...new Set(mainExternalLinks)],
    hasNoindex: /<meta\s+name=["']robots["'][^>]*noindex/i.test(html),
    isRedirect: /http-equiv=["']refresh["']/i.test(html),
    schemaTypes: [
      ...new Set(
        JSON.stringify(jsonLd)
          .match(/"@type":"([^"]+)"/g)
          ?.map((entry) => entry.replace(/^.*:"/, "").replace(/"$/, "")) ?? [],
      ),
    ],
  });
}

pages.sort((a, b) => a.route.localeCompare(b.route));
const contentPages = pages.filter(
  (page) => !page.isRedirect && page.route !== "/404.html",
);
const routeSet = new Set(pages.map((page) => page.route));
const normalizedInternalRoute = (href) => {
  const pathname = href.split(/[?#]/)[0];
  if (/\.[a-z0-9]+$/i.test(pathname)) return null;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
};
const brokenLinks = pages.flatMap((page) =>
  page.internalLinks
    .map(normalizedInternalRoute)
    .filter((href) => href && !routeSet.has(href))
    .map((href) => ({ from: page.route, to: href })),
);
const titleCounts = Object.groupBy(pages, (page) => page.title);
const duplicateTitles = Object.entries(titleCounts)
  .filter(([title, matches]) => title && matches.length > 1)
  .map(([title, matches]) => ({ title, routes: matches.map((page) => page.route) }));
const inboundCounts = Object.fromEntries(pages.map((page) => [page.route, 0]));
for (const page of pages) {
  for (const href of page.internalLinks.map(normalizedInternalRoute)) {
    if (href && href !== page.route && href in inboundCounts) inboundCounts[href] += 1;
  }
}
for (const page of pages) page.inboundLinkCount = inboundCounts[page.route];

const report = {
  generatedAt: new Date().toISOString(),
  root,
  summary: {
    pages: pages.length,
    indexablePages: contentPages.filter((page) => !page.hasNoindex).length,
    missingTitles: contentPages.filter((page) => !page.title).length,
    duplicateTitles: duplicateTitles.length,
    missingDescriptions: contentPages.filter((page) => !page.description).length,
    missingCanonicals: contentPages.filter((page) => !page.canonical).length,
    invalidH1Counts: contentPages.filter((page) => page.h1s.length !== 1).length,
    brokenInternalLinks: brokenLinks.length,
    pagesWithoutStructuredData: contentPages.filter((page) => page.schemaTypes.length === 0).length,
    editorialPagesWithoutExternalSources: pages.filter(
      (page) =>
        page.route.startsWith("/resources/") &&
        page.route !== "/resources/" &&
        page.sourceLinks.length === 0,
    ).length,
  },
  duplicateTitles,
  brokenLinks,
  pages,
};

const serialized = `${JSON.stringify(report, null, 2)}\n`;
if (output) await writeFile(output, serialized);
process.stdout.write(serialized);
