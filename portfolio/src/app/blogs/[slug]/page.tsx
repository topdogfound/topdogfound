import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "content-collections";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import {
  extractHeadings,
  getPostCategories,
  getPostSlug,
  sortPostsByDate,
  toBlogCardModel,
} from "@/lib/blog";
import { BlogArticleHeader } from "@/components/blog/blog-article-header";
import { BlogArticleContent } from "@/components/blog/blog-article-content";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts";

function getPublishedPosts() {
  return sortPostsByDate(allPosts.filter((post) => post.isPublished !== false));
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: getPostSlug(post),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPosts().find((item) => getPostSlug(item) === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt ?? post.summary;
  const image = post.coverImage ?? post.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${DATA.url}/blogs/${slug}`,
      ...(image && {
        images: [{ url: image.startsWith("http") ? image : `${DATA.url}${image}` }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [image.startsWith("http") ? image : `${DATA.url}${image}`],
      }),
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getPublishedPosts();
  const postIndex = posts.findIndex((item) => getPostSlug(item) === slug);
  const post = posts[postIndex];

  if (!post) notFound();

  const model = toBlogCardModel(post);
  const headings = post.headings ?? extractHeadings(post.content);
  const previousPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  const relatedPosts = posts
    .filter((item) => getPostSlug(item) !== slug)
    .filter((item) =>
      getPostCategories(item).some((category) => model.categories.includes(category))
    )
    .slice(0, 2)
    .map((item) => ({
      slug: getPostSlug(item),
      title: item.title,
      publishedAt: formatDate(item.publishedAt),
    }));

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    description: model.excerpt,
    image: model.coverImage
      ? model.coverImage.startsWith("http")
        ? model.coverImage
        : `${DATA.url}${model.coverImage}`
      : `${DATA.url}/opengraph-image`,
    url: `${DATA.url}/blogs/${slug}`,
    author: {
      "@type": "Person",
      name: model.authorName,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section
      id="blog-details"
      className="space-y-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-6 sm:px-10 lg:px-14 xl:px-20"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLdContent }}
      />

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/blogs" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
          <ChevronLeft className="size-3" />
          Blogs
        </Link>
        <ChevronRight className="size-3" />
        <span className="truncate max-w-[60ch]">{post.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8 lg:gap-10">
        <main className="space-y-8 min-w-0">
          <BlogArticleHeader
            title={post.title}
            excerpt={model.excerpt}
            categories={model.categories}
            publishedAt={formatDate(post.publishedAt)}
            readingTime={model.readingTime}
          />

          <BlogArticleContent
            title={post.title}
            coverImage={model.coverImage}
            mdxCode={post.mdx}
          />

          <div className="border-t border-border pt-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {previousPost ? (
                <Link
                  href={`/blogs/${getPostSlug(previousPost)}`}
                  className="rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
                >
                  <p className="text-xs text-muted-foreground mb-1">Previous</p>
                  <p className="font-medium">{previousPost.title}</p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blogs/${getPostSlug(nextPost)}`}
                  className="rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors text-right"
                >
                  <p className="text-xs text-muted-foreground mb-1">Next</p>
                  <p className="font-medium">{nextPost.title}</p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          <BlogRelatedPosts posts={relatedPosts} />
        </main>

        <BlogSidebar
          authorName={model.authorName}
          authorRole={model.authorRole}
          authorAvatar={model.authorAvatar}
          headings={headings}
        />
      </div>
    </section>
  );
}
