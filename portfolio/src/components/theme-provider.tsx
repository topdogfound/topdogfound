"use client";

import { useEffect, type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: "light" | "dark";
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const theme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : defaultTheme;

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [defaultTheme]);

  return children;
}
