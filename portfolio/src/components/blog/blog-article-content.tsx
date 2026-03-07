import Image from "next/image";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";

interface BlogArticleContentProps {
  title: string;
  coverImage?: string;
  mdxCode: string;
}

export function BlogArticleContent({ title, coverImage, mdxCode }: BlogArticleContentProps) {
  return (
    <div className="space-y-8">
      {coverImage && (
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden border border-border bg-muted">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority
          />
        </div>
      )}
      <article className="prose max-w-none text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXContent code={mdxCode} components={mdxComponents} />
      </article>
    </div>
  );
}
