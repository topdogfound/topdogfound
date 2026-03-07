import { formatDate } from "@/lib/utils";

const WORDS_PER_MINUTE = 220;

export interface BlogHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

type PostLike = {
  title: string;
  summary: string;
  publishedAt: string;
  content: string;
  _meta: { path: string };
  tags?: string[];
  excerpt?: string;
  image?: string;
  coverImage?: string;
  author?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  isPublished?: boolean;
  featured?: boolean;
  readingTime?: number;
  headings?: BlogHeading[];
};

export function getPostSlug(post: PostLike): string {
  return post._meta.path.replace(/\.mdx$/, "");
}

export function sortPostsByDate<T extends Pick<PostLike, "publishedAt">>(posts: T[]): T[] {
  return [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) return -1;
    return 1;
  });
}

export function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function extractHeadings(markdown: string): BlogHeading[] {
  const lines = markdown.split("\n");
  const headings: BlogHeading[] = [];
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

    const level = match[1] === "##" ? 2 : 3;
    const text = match[2].trim();
    headings.push({
      id: slugifyHeading(text),
      text,
      level,
    });
  }

  return headings;
}

const CATEGORY_RULES: Array<{ label: string; includes: string[] }> = [
  { label: "Tech", includes: ["tech", "system", "debug", "coding", "ai", "security", "go", "open-source", "product", "documentation"] },
  { label: "Life", includes: ["life", "career", "fitness", "financial", "clarity", "deep-work"] },
  { label: "Geopolitics", includes: ["geopolitics", "policy", "india", "news"] },
  { label: "Hobby", includes: ["hobby", "hobbies"] },
  { label: "Games", includes: ["game", "gaming"] },
];

export function inferCategoriesFromSlug(slug: string): string[] {
  const categories = CATEGORY_RULES
    .filter((rule) => rule.includes.some((token) => slug.includes(token)))
    .map((rule) => rule.label);
  return categories.length ? categories : ["Tech"];
}

export function getPostCategories(post: PostLike): string[] {
  if (post.tags && post.tags.length > 0) return post.tags;
  return inferCategoriesFromSlug(getPostSlug(post));
}

export function toBlogCardModel(post: PostLike) {
  const slug = getPostSlug(post);
  const categories = getPostCategories(post);
  const excerpt = post.excerpt ?? post.summary;
  const readingTime = post.readingTime ?? calculateReadingTime(post.content);
  const coverImage = post.coverImage ?? post.image;
  return {
    slug,
    title: post.title,
    excerpt,
    publishedAt: formatDate(post.publishedAt),
    publishedRaw: post.publishedAt,
    categories,
    readingTime,
    coverImage,
    authorName: post.authorName ?? post.author ?? "Ravi Kant",
    authorRole: post.authorRole ?? "Software Developer",
    authorAvatar: post.authorAvatar ?? "/me.jpeg",
    isPublished: post.isPublished ?? true,
    featured: post.featured ?? false,
  };
}
