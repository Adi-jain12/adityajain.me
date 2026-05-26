"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-7 sm:gap-10 md:gap-14">
      {siteConfig.navLinks.map((link) => {
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
              "group relative inline-flex flex-col items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[12px]",
              isActive ? "text-white" : "text-white/70 hover:text-white",
            )}
          >
            <span>{link.label}</span>
            <span
              aria-hidden
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
              )}
              style={{ backgroundColor: "#e23a26" }}
            />
          </Link>
        );
      })}
    </nav>
  );
}
