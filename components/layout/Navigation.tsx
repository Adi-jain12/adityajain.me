"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-3 sm:gap-7 md:gap-12">
      {siteConfig.navLinks.map((link, idx) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group relative inline-flex items-baseline gap-1 font-mono uppercase transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-1.5",
              "text-[9.5px] tracking-[0.18em] sm:text-[11px] sm:tracking-[0.24em]",
              isActive
                ? "text-foreground"
                : "text-text/85 hover:text-foreground",
            )}
          >
            <span
              aria-hidden
              className="text-[8.5px] font-semibold tabular-nums opacity-90 transition-opacity duration-300 sm:text-[10px]"
            >
              0{idx + 1}.
            </span>
            <span
              className="link-underline font-semibold"
              data-active={isActive ? "true" : undefined}
            >
              {link.label}
            </span>
          </Link>
        );
      })}

      <a
        href="mailto:hello@adityajain.me"
        className={cn(
          "group ml-1 hidden items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[11px] sm:tracking-[0.24em] md:inline-flex",
          "border-text/45 text-text hover:border-text/80 hover:bg-white/5",
        )}
      >
        <span>Let&apos;s Connect</span>
        <span
          aria-hidden
          className="inline-flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
        >
          <svg viewBox="0 0 20 10" className="h-[10px] w-[18px]" fill="none">
            <path
              d="M1 5 H17 M13 1 L17 5 L13 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </nav>
  );
}