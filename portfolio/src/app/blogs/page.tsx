import type { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "content-collections";
import { BlogPageHeader } from "@/components/blog/blog-page-header";
import { BlogFilterBar, type BlogCategoryItem } from "@/components/blog/blog-filter-bar";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogEmptyState } from "@/components/blog/blog-empty-state";
import { toBlogCardModel, getPostCategories, sortPostsByDate } from "@/lib/blog";
import { normalizePage, paginate } from "@/lib/pagination";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Thoughtful essays on life, software engineering, geopolitics, hobbies, and games.",
  openGraph: {
    title: "Blogs",
    description: "Thoughtful essays on life, software engineering, geopolitics, hobbies, and games.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs",
    description: "Thoughtful essays on life, software engineering, geopolitics, hobbies, and games.",
  },
};

const PAGE_SIZE = 9;

function buildCategoryMap() {
  const counts = new Map<string, number>();
  for (const post of allPosts) {
    if (post.isPublished === false) continue;
    for (const category of getPostCategories(post)) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }
  return counts;
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category, page } = await searchParams;

  const published = sortPostsByDate(allPosts.filter((post) => post.isPublished !== false));
  const categoryMap = buildCategoryMap();

  const categoryItems: BlogCategoryItem[] = [
    { label: "All", value: "all", count: published.length },
    ...[...categoryMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => ({ label, value: label, count })),
  ];

  const activeCategory =
    category && categoryMap.has(category) ? category : "all";

  const filteredPosts =
    activeCategory === "all"
      ? published
      : published.filter((post) => getPostCategories(post).includes(activeCategory));

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = normalizePage(page, totalPages);
  const { items, pagination } = paginate(filteredPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  const cardPosts = items.map((post) => toBlogCardModel(post));

  const getPageHref = (targetPage: number) => {
    const params = new URLSearchParams();
    if (activeCategory !== "all") params.set("category", activeCategory);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/blogs?${query}` : "/blogs";
  };

  return (
    <section
      id="blogs"
      className="space-y-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-6 sm:px-10 lg:px-14 xl:px-20"
    >
      <BlogPageHeader
        title="Blog"
        description="Latest essays on engineering, life systems, geopolitics, hobbies, and game thinking."
      />

      <BlogFilterBar categories={categoryItems} activeCategory={activeCategory} />

      {cardPosts.length > 0 ? (
        <>
          <BlogGrid posts={cardPosts} />
          {pagination.totalPages > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Page {pagination.page} of {pagination.totalPages}
              </p>
              <div className="flex items-center gap-2">
                {pagination.hasPreviousPage ? (
                  <Link
                    href={getPageHref(pagination.page - 1)}
                    className="h-9 px-4 inline-flex items-center rounded-md border border-border hover:bg-accent/50 text-sm"
                  >
                    Previous
                  </Link>
                ) : (
                  <span className="h-9 px-4 inline-flex items-center rounded-md border border-border opacity-50 text-sm">
                    Previous
                  </span>
                )}
                {pagination.hasNextPage ? (
                  <Link
                    href={getPageHref(pagination.page + 1)}
                    className="h-9 px-4 inline-flex items-center rounded-md border border-border hover:bg-accent/50 text-sm"
                  >
                    Next
                  </Link>
                ) : (
                  <span className="h-9 px-4 inline-flex items-center rounded-md border border-border opacity-50 text-sm">
                    Next
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <BlogEmptyState
          title="No posts in this category yet"
          description="Try another filter or explore all blog posts."
        />
      )}
    </section>
  );
}
