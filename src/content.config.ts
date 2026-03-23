import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tradeOptions = [
  'General Construction',
  'Remodelling',
  'Electrician',
  'Plumbing',
  'HVAC',
  'Home Builders',
  'Roofing',
] as const;

const templates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/templates' }),
  schema: z.object({
    title: z.string(),
    trade: z.enum(tradeOptions),
    description: z.string(),
    thumbnail: z.string().optional(),
    liveDemoUrl: z.string().url().optional(),
    mainSiteUrl: z.string().url().optional(),
    category: z.string().optional(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string().optional(),
    description: z.string().optional(),
  }),
});

const trades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trades' }),
  schema: z.object({
    title: z.string(),
    trade: z.enum(tradeOptions),
    shortTitle: z.string(),
    description: z.string(),
    hoverDescription: z.string(),
    image: z.string(),
    overlayColor: z.enum(['navy', 'orange']),
    slug: z.string(),
  }),
});

export const collections = {
  templates,
  legal,
  trades,
};