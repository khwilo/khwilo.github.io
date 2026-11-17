import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// draft: true keeps an entry out of the production build.
// Drafts still show when you run `npm run dev`.

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    summary: z.string(),
    order: z.number(),
    // Set for an entry that links out (for example a GitHub repo) instead of a case study page.
    externalUrl: z.string().optional(),
    externalLabel: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Set for a piece published elsewhere; the list links straight to it.
    externalUrl: z.string().optional(),
    source: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
