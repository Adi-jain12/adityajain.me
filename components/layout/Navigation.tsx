"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-3 sm:gap-5 md:gap-6">
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
              "text-sm text-foreground transition-opacity hover:opacity-80 sm:text-base",
              isActive ? "font-bold" : "font-medium",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
