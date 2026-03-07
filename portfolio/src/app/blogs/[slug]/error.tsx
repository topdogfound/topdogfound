"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogDetailsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="rounded-xl border border-border p-10 text-center space-y-3">
      <h2 className="text-2xl font-semibold">This article failed to load</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" onClick={() => reset()}>
          Retry
        </Button>
        <Button asChild>
          <Link href="/blogs">Back to blogs</Link>
        </Button>
      </div>
    </section>
  );
}
