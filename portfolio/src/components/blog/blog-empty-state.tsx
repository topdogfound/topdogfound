import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogEmptyStateProps {
  title?: string;
  description?: string;
  resetHref?: string;
}

export function BlogEmptyState({
  title = "No posts found",
  description = "Try another category or check back later for new articles.",
  resetHref = "/blogs",
}: BlogEmptyStateProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-10 text-center space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <Button asChild variant="outline">
        <Link href={resetHref}>View all posts</Link>
      </Button>
    </div>
  );
}
