import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogAuthorCard } from "@/components/blog/blog-author-card";
import { BlogTableOfContents } from "@/components/blog/blog-table-of-contents";
import type { BlogHeading } from "@/lib/blog";

interface BlogSidebarProps {
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  headings: BlogHeading[];
}

export function BlogSidebar({
  authorName,
  authorRole,
  authorAvatar,
  headings,
}: BlogSidebarProps) {
  return (
    <aside className="grid gap-4 sm:grid-cols-2 lg:sticky lg:top-8 lg:block lg:space-y-4">
      <BlogAuthorCard name={authorName} role={authorRole} avatar={authorAvatar} />
      {headings.length > 0 && (
        <div className="sm:col-span-2 lg:col-span-1">
          <BlogTableOfContents headings={headings} />
        </div>
      )}
      <Card className="border border-border/80 p-4 sm:p-5 lg:p-4">
        <CardHeader className="mb-4">
          <CardTitle className="text-base font-semibold leading-tight">
            Build Better Interfaces
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Explore modern UI patterns and practical design-system workflows for production apps.
          </p>
          <Link
            href="/"
            className="inline-flex text-sm font-medium leading-none text-primary underline underline-offset-4"
          >
            Visit portfolio
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}
