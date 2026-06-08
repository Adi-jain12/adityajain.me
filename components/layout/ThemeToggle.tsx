"use client";

import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setIsDark((prev) => !prev)}
      className="relative inline-flex h-8 w-17 shrink-0 items-center rounded-full border border-text/45 p-0.5 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-text/80"
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0.5 h-6 w-6 rounded-full bg-foreground/15 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isDark ? "translate-x-8.5" : "translate-x-0.5",
        )}
      />
      <span aria-hidden className="relative z-10 flex w-full items-center justify-between px-1.5">
        <FiSun
          className={cn(
            "h-3.5 w-3.5 transition-colors duration-300",
            isDark ? "text-text/40" : "text-foreground",
          )}
        />
        <FiMoon
          className={cn(
            "h-3.5 w-3.5 transition-colors duration-300",
            isDark ? "text-foreground" : "text-text/40",
          )}
        />
      </span>
    </button>
  );
}
