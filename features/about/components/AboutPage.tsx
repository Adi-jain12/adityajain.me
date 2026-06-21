import Image from "next/image";
import type { IconType } from "react-icons";
import { LuBookOpen, LuPalette, LuRocket, LuZap } from "react-icons/lu";
import { aboutData } from "../data/about";
import type { AboutHighlight, AboutSection, HighlightIconKey } from "../types";
import { EntryCard } from "./EntryCard";
import { ExperienceSection } from "./ExperienceSection";
import { TechStack } from "./TechStack";
import { Reveal } from "@/components/ui/Reveal";

const highlightIconMap: Record<HighlightIconKey, IconType> = {
  rocket: LuRocket,
  palette: LuPalette,
  zap: LuZap,
  book: LuBookOpen,
};

function HighlightCard({ highlight }: { highlight: AboutHighlight }) {
  const Icon = highlightIconMap[highlight.icon];

  return (
    <article
      className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 sm:gap-5 sm:p-6"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent/20 to-accent/5 text-accent sm:h-14 sm:w-14"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
          {highlight.title}
        </h3>
        <p className="mt-1 text-sm text-text-muted sm:text-[15px]">
          {highlight.description}
        </p>
      </div>
    </article>
  );
}

function Section({ section }: { section: AboutSection }) {
  return (
    <section className="mt-12 sm:mt-16 md:mt-24">
      <Reveal>
        <h2 className="text-xl font-bold lowercase tracking-tight text-text sm:text-2xl md:text-3xl">
          {section.heading}
        </h2>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-5">
        {section.entries.map((entry, i) => (
          <Reveal key={`${section.heading}-${i}`} delay={i * 0.08}>
            <EntryCard entry={entry} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="pt-16 pb-10 sm:pb-14 md:pb-20">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <header>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
              About <span className="text-accent">Me</span>
            </h1>
            <p className="mt-3 text-base text-text-muted sm:mt-4 sm:text-lg">
              Get to know more about my journey, experience, and passion.
            </p>
          </header>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] md:items-stretch md:gap-12 lg:gap-16">
          <Reveal delay={0.1}>
            <div>
              <div className="space-y-4 text-base leading-relaxed text-text sm:space-y-5">
                {aboutData.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {aboutData.highlights && aboutData.highlights.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {aboutData.highlights.map((highlight) => (
                    <HighlightCard key={highlight.title} highlight={highlight} />
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.16} className="md:h-full">
            <figure className="relative mx-auto w-full max-w-sm sm:max-w-md md:mx-0 md:h-full md:max-w-none">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-surface shadow-sm md:aspect-auto md:h-full md:min-h-0">
                <Image
                  src="/images/about/profile.webp"
                  alt="Aditya Jain Full-Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 384px, 480px"
                  priority
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl">
        {aboutData.techStack && aboutData.techStack.length > 0 && (
          <section className="mt-12 sm:mt-16 md:mt-24">
            <Reveal>
              <h2 className="text-xl font-bold lowercase tracking-tight text-text sm:text-2xl md:text-3xl">
                tech stack
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 sm:mt-6">
                <TechStack categories={aboutData.techStack} />
              </div>
            </Reveal>
          </section>
        )}

        {aboutData.sections.map((section) =>
          section.heading === "experiences" ? (
            <ExperienceSection
              key={section.heading}
              heading={section.heading}
              entries={section.entries}
            />
          ) : (
            <Section key={section.heading} section={section} />
          )
        )}
      </div>
    </div>
  );
}
