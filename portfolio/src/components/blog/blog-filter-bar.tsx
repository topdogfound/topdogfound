import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface BlogCategoryItem {
  label: string;
  count: number;
  value: string;
}

interface BlogFilterBarProps {
  categories: BlogCategoryItem[];
  activeCategory: string;
}

export function BlogFilterBar({ categories, activeCategory }: BlogFilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        return (
          <Link
            key={category.value}
            href={category.value === "all" ? "/blogs" : `/blogs?category=${encodeURIComponent(category.value)}`}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors",
              isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground hover:text-foreground hover:bg-accent/60"
            )}
          >
            <span>{category.label}</span>
            <Badge
              variant={isActive ? "secondary" : "outline"}
              className={cn(
                "rounded-full px-2 py-0 text-[11px] font-medium leading-4",
                isActive && "text-primary bg-primary-foreground/90 border-primary-foreground/50"
              )}
            >
              {category.count}
            </Badge>
          </Link>
        );
      })}
    </div>
  );
}
