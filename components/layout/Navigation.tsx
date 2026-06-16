"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

function isNavActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

const linkBaseClass =
  "group relative inline-flex items-center gap-1 tracking-tight transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-1.5";

const navTextClass = "text-base tracking-tight";

type NavLinkProps = {
  link: (typeof siteConfig.navLinks)[number];
  isActive: boolean;
  className?: string;
  onNavigate?: () => void;
};

function NavLink({ link, isActive, className, onNavigate }: NavLinkProps) {
  return (
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={className}
    >
      <span
        data-active={isActive ? "true" : undefined}
        className={cn(isActive && "font-bold")}
      >
        {link.label}
      </span>
    </Link>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="hidden shrink-0 items-center gap-4 md:gap-6 sm:flex">
        {siteConfig.navLinks.map((link) => {
          const isActive = isNavActive(pathname, link.href);

          return (
            <NavLink
              key={link.href}
              link={link}
              isActive={isActive}
              className={cn(
                linkBaseClass,
                navTextClass,
                isActive ? "text-foreground" : "text-text/85 hover:text-foreground",
              )}
            />
          );
        })}

        <ThemeToggle className={navTextClass} />
      </nav>

      <div className="flex items-center gap-2 sm:hidden">
        <ThemeToggle className={navTextClass} />
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-foreground transition-colors duration-300 hover:bg-white/5"
        >
          {open ? (
            <FiX className="h-5 w-5" aria-hidden />
          ) : (
            <FiMenu className="h-5 w-5" aria-hidden />
          )}
        </button>

        {open ? (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 top-14 z-40 bg-black/60 backdrop-blur-[2px]"
              onClick={closeMenu}
            />
            <nav
              id="mobile-nav"
              className="fixed inset-x-0 top-14 z-50 border-b border-white/10 bg-background px-4 py-4"
            >
              <ul className="flex flex-col gap-1">
                {siteConfig.navLinks.map((link) => {
                  const isActive = isNavActive(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <NavLink
                        link={link}
                        isActive={isActive}
                        onNavigate={closeMenu}
                        className={cn(
                          linkBaseClass,
                          "w-full py-3 text-lg",
                          isActive
                            ? "text-foreground"
                            : "text-text/85 hover:text-foreground",
                        )}
                      />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        ) : null}
      </div>
    </>
  );
}
