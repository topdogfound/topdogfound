import { Card } from "@/components/ui/card";

export function BlogSkeletonCard() {
  return (
    <Card className="overflow-hidden rounded-xl border border-border/80 animate-pulse">
      <div className="h-52 w-full bg-muted/70" />
      <div className="p-5 space-y-3">
        <div className="h-5 w-24 bg-muted rounded-full" />
        <div className="h-8 w-5/6 bg-muted rounded-md" />
        <div className="h-4 w-full bg-muted rounded-md" />
        <div className="h-4 w-4/5 bg-muted rounded-md" />
        <div className="h-4 w-1/3 bg-muted rounded-md" />
      </div>
    </Card>
  );
}
