import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pinned: z.boolean().optional(),
    publishDate: z.string(),
    description: z.string(),
    permalink: z.string().url(),
    issueUri: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
