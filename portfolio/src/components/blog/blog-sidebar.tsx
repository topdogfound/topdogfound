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
    <aside className="space-y-4 lg:sticky lg:top-8">
      <BlogAuthorCard name={authorName} role={authorRole} avatar={authorAvatar} />
      <BlogTableOfContents headings={headings} />
      <Card className="border border-border/80">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">Build Better Interfaces</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Explore modern UI patterns and practical design-system workflows for production apps.
          </p>
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-primary underline underline-offset-4"
          >
            Visit portfolio
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}
