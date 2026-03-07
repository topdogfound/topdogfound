import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";

const posts = defineCollection({
    name: "posts",
    directory: "content",
    include: "**/*.mdx",
    schema: z.object({
        title: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        author: z.string().optional(),
        authorName: z.string().optional(),
        authorRole: z.string().optional(),
        authorAvatar: z.string().optional(),
        summary: z.string(),
        excerpt: z.string().optional(),
        image: z.string().optional(),
        coverImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        isPublished: z.boolean().optional(),
        featured: z.boolean().optional(),
        seoTitle: z.string().optional(),
        seoDescription: z.string().optional(),
        createdAt: z.string().optional(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        const slug = document._meta.path.replace(/\.mdx$/, "");
        const readingTime = Math.max(
            1,
            Math.ceil(document.content.split(/\s+/).filter(Boolean).length / 220)
        );
        const headings = extractHeadings(document.content);
        const resolvedCoverImage = document.coverImage ?? document.image;

        return {
            ...document,
            slug,
            tags: document.tags ?? [],
            isPublished: document.isPublished ?? true,
            excerpt: document.excerpt ?? document.summary,
            readingTime,
            headings,
            ...(resolvedCoverImage ? { coverImage: resolvedCoverImage } : {}),
            mdx,
        };
    },
});

function extractHeadings(markdown: string) {
    const lines = markdown.split("\n");
    const headings: Array<{ id: string; text: string; level: 2 | 3 }> = [];
    let inCodeBlock = false;

    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (line.startsWith("```")) {
            inCodeBlock = !inCodeBlock;
            continue;
        }
        if (inCodeBlock) continue;

        const match = line.match(/^(##|###)\s+(.+)$/);
        if (!match) continue;

        const text = match[2].trim();
        headings.push({
            id: text
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .trim()
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-"),
            text,
            level: match[1] === "##" ? 2 : 3,
        });
    }

    return headings;
}

export default defineConfig({
    collections: [posts],
});
