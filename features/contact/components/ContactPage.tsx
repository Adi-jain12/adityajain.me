import type { IconType } from "react-icons";
import { LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { SiGithub, SiX } from "react-icons/si";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const socialIconMap: Record<string, IconType> = {
  GitHub: SiGithub,
  Twitter: SiX,
  LinkedIn: LuLinkedin,
};

const socialIconClass: Record<string, string> = {
  GitHub: "text-text",
  Twitter: "text-text",
  LinkedIn: "text-[#0A66C2]",
};

function IconCircle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface sm:h-14 sm:w-14 ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function ExternalArrow() {
  return (
    <span
      aria-hidden
      className="absolute right-5 top-5 text-sm text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground sm:right-6 sm:top-6"
    >
      ↗
    </span>
  );
}

export function ContactPage() {
  return (
    <div className="pt-16 pb-10 sm:pb-14 md:pb-20">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="mt-3 text-base text-text-muted sm:mt-4 sm:text-lg">
           I'm always open to discussing new opportunities,
interesting projects, and technology.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          <Reveal delay={0.08}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group relative flex h-full items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-border/80 hover:bg-surface sm:gap-5 sm:p-6"
            >
              <IconCircle className="border-accent/30">
                <LuMail className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
              </IconCircle>
              <div className="min-w-0 pr-6">
                <p className="text-[10px] uppercase tracking-widest text-text-muted sm:text-xs">
                  Email
                </p>
                <p className="mt-1 truncate text-base tracking-wider font-semibold text-accent transition-colors sm:text-lg">
                  {siteConfig.email}
                </p>
              </div>
              <ExternalArrow />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 sm:gap-5 sm:p-6">
              <IconCircle className="border-accent/30">
                <LuMapPin className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
              </IconCircle>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-text-muted sm:text-xs">
                  {siteConfig.location.tagline}
                </p>
                <p className="mt-1 text-base font-semibold tracking-wider text-text sm:text-lg">
                  {siteConfig.location.place}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-4 rounded-2xl border border-border bg-surface/60 p-6 sm:mt-5 sm:p-8">
            <p className="text-center text-[10px] uppercase tracking-widest text-text-muted sm:text-xs">
              Connect
            </p>

            <div className="mt-5 flex items-center justify-center sm:mt-6">
              {siteConfig.socialLinks.map((link, i) => {
                const Icon = socialIconMap[link.label] ?? SiGithub;
                const iconClass = socialIconClass[link.label] ?? "text-text";

                return (
                  <div key={link.href} className="flex items-center">
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="mx-5 h-8 w-px bg-border sm:mx-8"
                      />
                    )}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface transition-opacity hover:opacity-80 sm:h-14 sm:w-14"
                    >
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${iconClass}`} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
