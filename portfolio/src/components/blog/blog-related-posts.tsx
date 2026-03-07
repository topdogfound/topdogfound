import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedPost {
  slug: string;
  title: string;
  publishedAt: string;
}

interface BlogRelatedPostsProps {
  posts: RelatedPost[];
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="space-y-4 mt-12">
      <h2 className="text-2xl font-semibold tracking-tight">Related posts</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Card key={post.slug} className="border border-border/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg leading-snug">
                <Link href={`/blogs/${post.slug}`} className="hover:underline underline-offset-4">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{post.publishedAt}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
