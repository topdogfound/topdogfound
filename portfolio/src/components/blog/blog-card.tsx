import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export interface BlogCardItem {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  categories: string[];
  coverImage?: string;
  readingTime: number;
}

interface BlogCardProps {
  post: BlogCardItem;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
    >
      <Card className="h-full overflow-hidden border border-border/80 rounded-xl transition-all duration-200 hover:border-border hover:shadow-[0_8px_28px_-18px_rgba(0,0,0,0.4)]">
        <div className="relative h-52 w-full overflow-hidden bg-muted">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/70" />
          )}
        </div>

        <CardHeader className="p-5 pb-2 gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="outline" className="rounded-full font-medium">
                {category}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-2xl leading-snug tracking-tight font-semibold">
            <span className="group-hover:text-foreground">
              {post.title}
              <ArrowUpRight className="ml-1 inline-block size-4 text-muted-foreground opacity-0 -translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-5 pt-0 space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
          <div className="text-sm text-muted-foreground">
            {post.publishedAt} · {post.readingTime} min read
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
