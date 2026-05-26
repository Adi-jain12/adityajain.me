"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-7 sm:gap-10 md:gap-14">
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
              "text-[11px] tracking-[0.22em] sm:text-[12px]",
              isActive
                ? "text-foreground"
                : "text-foreground/65 hover:text-foreground",
            )}
          >
            <span
              aria-hidden
              className="text-[9px] tabular-nums opacity-50 transition-opacity duration-300 group-hover:opacity-90 sm:text-[10px]"
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
