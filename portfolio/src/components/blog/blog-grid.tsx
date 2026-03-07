import { BlogCard, type BlogCardItem } from "@/components/blog/blog-card";

interface BlogGridProps {
  posts: BlogCardItem[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
