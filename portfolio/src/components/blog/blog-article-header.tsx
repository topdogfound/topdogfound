import { Badge } from "@/components/ui/badge";

interface BlogArticleHeaderProps {
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  categories: string[];
}

export function BlogArticleHeader({
  title,
  excerpt,
  publishedAt,
  readingTime,
  categories,
}: BlogArticleHeaderProps) {
  return (
    <header className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="outline" className="rounded-full font-medium">
            {category}
          </Badge>
        ))}
        <span className="text-sm text-muted-foreground">{publishedAt}</span>
        <span className="text-sm text-muted-foreground">· {readingTime} min read</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
        {excerpt}
      </p>
    </header>
  );
}
