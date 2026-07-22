import type { IconType } from "react-icons";
import { LuClock, LuLinkedin, LuMail, LuMapPin, LuSend } from "react-icons/lu";
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

const contactRowLabelClass =
  "text-[10px] uppercase tracking-[0.2em] text-text-muted sm:text-xs sm:tracking-[0.22em]";

const contactRowValueClass =
 `mt-1 text-base font-semibold text-text sm:mt-1.5 sm:text-lg`;

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent/20 to-accent/5 text-accent sm:h-14 sm:w-14"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function ContactInfoRow({
  icon: Icon,
  label,
  children,
  href,
  showDivider = false,
}: {
  icon: IconType;
  label: string;
  children: React.ReactNode;
  href?: string;
  showDivider?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 py-5 sm:gap-5 sm:py-6 ${
        showDivider ? "border-t border-border" : ""
      }`}
    >
      <IconCircle>
        <Icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
      </IconCircle>
      <div className="min-w-0">
        <p className={contactRowLabelClass}>{label}</p>
        {href ? (
          <a
            href={href}
            className={`${contactRowValueClass} ${label === 'Email' ? 'tracking-wider' : ''} inline-block transition-colors hover:text-accent`}
          >
            {children}
          </a>
        ) : (
          <p className={contactRowValueClass}>{children}</p>
        )}
      </div>
    </div>
  );
}
     
function ColumnDivider() {
  return (
    <div
      aria-hidden
      className="relative mx-0 hidden shrink-0 self-stretch md:mx-8 lg:mx-12 md:block"
    >
      <div className="h-full w-px bg-border" />
      <div className="absolute top-1/2 left-0 h-16 w-px -translate-y-1/2 bg-accent" />
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="pt-16 pb-10 sm:pb-14 md:pb-20">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <header>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base text-text-muted sm:mt-4 sm:text-lg">
              Open to discussing new opportunities, interesting
              projects, and technology.
            </p>
          </header>
        </Reveal>

        <div className="mx-auto w-full max-w-4xl">
        <Reveal delay={0.08}>
          <div className="mt-8 sm:mt-10 md:mt-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-center">
              <div className="min-w-0 flex-1">
                <div>
                  <ContactInfoRow
                    icon={LuMail}
                    label="Email"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </ContactInfoRow>
                  <ContactInfoRow
                    icon={LuMapPin}
                    label="Coding and Building..."
                    showDivider
                  >
                    {siteConfig.location.place}
                  </ContactInfoRow>
                  <ContactInfoRow
                    icon={LuClock}
                    label="Response Time"
                    showDivider
                  >
                    Usually replies within 24 hours
                  </ContactInfoRow>
                </div>
              </div>

              <ColumnDivider />

              <div className="min-w-0 flex-1 border-t border-border pt-8 text-center md:border-0 md:pt-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted sm:text-xs sm:tracking-[0.22em]">
                  Let&apos;s Connect
                </p>

                <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6 sm:gap-5">
                  {siteConfig.socialLinks.map((link) => {
                    const Icon = socialIconMap[link.label] ?? SiGithub;
                    const iconClass = socialIconClass[link.label] ?? "text-text";

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/60 transition-opacity hover:opacity-80 sm:h-14 sm:w-14"
                      >
                        <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${iconClass}`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* <div className="relative mt-10 border-t border-border pt-10 sm:mt-12 sm:pt-12">
          <span
            className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background sm:h-10 sm:w-10"
            aria-hidden
          >
            <LuSend className="h-4 w-4 text-accent" />
          </span>
          <p className="text-center text-sm text-text-muted sm:text-base">
            Let&apos;s create something amazing together.
          </p>
        </div> */}
        </div>
      </section>
    </div>
  );
}
