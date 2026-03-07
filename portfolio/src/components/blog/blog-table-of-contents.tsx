import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogHeading } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface BlogTableOfContentsProps {
  headings: BlogHeading[];
}

export function BlogTableOfContents({ headings }: BlogTableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <Card className="border border-border/80">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">On this page</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {headings.map((heading) => (
          <Link
            key={`${heading.level}-${heading.id}`}
            href={`#${heading.id}`}
            className={cn(
              "block text-sm text-muted-foreground hover:text-foreground transition-colors",
              heading.level === 3 && "pl-4 text-xs"
            )}
          >
            {heading.text}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
