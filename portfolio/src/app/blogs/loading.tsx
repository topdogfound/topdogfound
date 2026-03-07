import { BlogSkeletonCard } from "@/components/blog/blog-skeleton-card";

export default function BlogsLoading() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <div className="h-12 w-52 bg-muted rounded-md animate-pulse" />
        <div className="h-6 w-[34rem] max-w-full bg-muted rounded-md animate-pulse" />
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-9 w-28 rounded-full bg-muted animate-pulse" />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogSkeletonCard key={index} />
        ))}
      </div>
    </section>
  );
}
