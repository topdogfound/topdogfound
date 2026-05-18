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
    <Card className="border border-border/80 p-4 sm:p-5 lg:p-4">
      <CardHeader className="mb-4">
        <CardTitle className="text-sm font-medium leading-none text-muted-foreground">
          On this page
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {headings.map((heading) => (
          <Link
            key={`${heading.level}-${heading.id}`}
            href={`#${heading.id}`}
            className={cn(
              "block text-sm leading-snug text-muted-foreground transition-colors hover:text-foreground",
              heading.level === 3 && "pl-4 text-xs leading-snug"
            )}
          >
            {heading.text}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
