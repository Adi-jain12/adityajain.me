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
  idx: number;
  isActive: boolean;
  className?: string;
  onNavigate?: () => void;
};

function NavLink({ link, idx, isActive, className, onNavigate }: NavLinkProps) {
  return (
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={className}
    >
      {/* <span
        aria-hidden
        className="text-[10px] tabular-nums opacity-80 transition-opacity duration-300 sm:text-xs"
      >
        0{idx + 1}.
      </span> */}
      <span
        data-active={isActive ? "true" : undefined}
        className={cn(isActive && "font-bold")}
      >
        {link.label}
      </span>
    </Link>
  );
}

// function ConnectLink({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
//   return (
//     <a
//       href="mailto:hello@adityajain.me"
//       onClick={onNavigate}
//       className={className}
//     >
//       <span className="mt-2">Let&apos;s Connect</span>
//       <span
//         aria-hidden
//         className="inline-flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
//       >
//         <svg viewBox="0 0 20 10" className="h-[10px] w-[18px]" fill="none">
//           <path
//             d="M1 5 H17 M13 1 L17 5 L13 9"
//             stroke="currentColor"
//             strokeWidth="1.4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </span>
//     </a>
//   );
// }

const connectClass =
  "group inline-flex items-center gap-2 rounded-full border tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border-text/45 text-text hover:border-text/80 hover:bg-white/5";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        {siteConfig.navLinks.map((link, idx) => {
          const isActive = isNavActive(pathname, link.href);

          return (
            <NavLink
              key={link.href}
              link={link}
              idx={idx}
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

        {/* <ConnectLink
          className={cn(
            connectClass,
            "ml-1 hidden px-3 py-1.5 text-base md:inline-flex",
          )}
        /> */}
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
                {siteConfig.navLinks.map((link, idx) => {
                  const isActive = isNavActive(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <NavLink
                        link={link}
                        idx={idx}
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
                {/* <li className="pt-2">
                  <ConnectLink
                    onNavigate={closeMenu}
                    className={cn(
                      connectClass,
                      "w-full justify-center px-4 py-3 text-base",
                    )}
                  />
                </li> */}
              </ul>
            </nav>
          </>
        ) : null}
      </div>
    </>
  );
}
