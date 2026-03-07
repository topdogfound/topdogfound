"use client";

import { Button } from "@/components/ui/button";

export default function BlogsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="rounded-xl border border-border p-10 text-center space-y-3">
      <h2 className="text-2xl font-semibold">Unable to load blogs</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <Button onClick={() => reset()} variant="outline">
        Retry
      </Button>
    </section>
  );
}
