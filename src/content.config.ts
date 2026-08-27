import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['ACTIVE', 'COMPLETED', 'ARCHIVED']),
    domain: z.string(),
    date: z.date().optional(),
    order: z.number().optional(),
    heroImage: z.string().optional(),
    architectureImage: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    tech: z.string().optional(),
  }),
});

const experimentsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/experiments" }),
  schema: z.object({
    title: z.string(),
    idNumber: z.string(),
    domain: z.string(),
    status: z.enum(['ONGOING', 'COMPLETED', 'ARCHIVED']).optional(),
    date: z.date(),
  }),
});

const notesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'experiments': experimentsCollection,
  'notes': notesCollection,
};
