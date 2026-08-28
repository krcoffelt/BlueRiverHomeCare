import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const resources = defineCollection({
  loader: glob({ base: "./src/content/resources", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    order: z.number(),
    readingTime: z.string(),
    author: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.url(),
          publisher: z.string(),
        }),
      )
      .min(1),
  }),
});

export const collections = { resources };
