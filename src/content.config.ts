import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    slug: z.string().optional(),
    image: z
      .object({
        url: z.string().url(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = { blog };
