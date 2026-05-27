"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex shrink-0 items-center gap-3 sm:gap-8 md:gap-14">
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
              "group relative inline-flex items-baseline gap-1.5 font-mono uppercase transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "text-[9px] tracking-[0.16em] sm:text-[11px] sm:tracking-[0.2em]",
              isActive
                ? "text-foreground"
                : "text-[#f3ead8]/85 hover:text-foreground",
            )}
          >
            <span
              aria-hidden
              className="hidden text-[9px] tabular-nums opacity-90 transition-opacity duration-300 group-hover:opacity-100 sm:inline sm:text-[10px]"
            >
              0{idx + 1}
            </span>
            <span
              className="link-underline"
              data-active={isActive ? "true" : undefined}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
