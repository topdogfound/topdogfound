"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  return (
    <AnimatedThemeToggler
      variant="circle"
      className={cn("grid place-items-center [&_svg]:size-full", className)}
    />
  );
}
