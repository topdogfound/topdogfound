interface BlogPageHeaderProps {
  title: string;
  description: string;
}

export function BlogPageHeader({ title, description }: BlogPageHeaderProps) {
  return (
    <header className="space-y-3">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
        {description}
      </p>
    </header>
  );
}
