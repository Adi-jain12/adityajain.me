"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { LuBriefcase, LuCalendar, LuChevronDown, LuMapPin } from "react-icons/lu";
import { Reveal } from "@/components/ui/Reveal";
import { aboutData } from "@/features/about/data/about";
import { getProjectsByCompany } from "@/features/projects";
import { ExperienceProjectsList } from "./ExperienceProjectsSection";
import { cn } from "@/lib/utils";

const currentExperience = aboutData.sections
  .find((section) => section.heading === "experiences")
  ?.entries[0];

const PANEL_GRADIENT = `
  radial-gradient(
    circle at 100% 0%,
    rgba(245, 131, 97, 0.22) 0%,
    transparent 48%
  ),
  linear-gradient(
    165deg,
    var(--color-surface-hover) 0%,
    var(--color-surface) 72%
  )
`;

export function CurrentExperienceSection() {
  const [showProjects, setShowProjects] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  if (!currentExperience) return null;

  const experienceProjects = currentExperience.organization
    ? getProjectsByCompany(currentExperience.organization)
    : [];
  const projectCount = experienceProjects.length;

  const handleToggleProjects = () => {
    setShowProjects((isOpen) => {
      const next = !isOpen;

      if (next) {
        requestAnimationFrame(() => {
          projectsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        });
      }

      return next;
    });
  };

  const {
    title,
    organization,
    duration,
    location,
    employmentType,
    description,
    achievements = [],
    technologies = [],
  } = currentExperience;

  return (
    <section
      aria-labelledby="current-experience-heading"
      className="w-full bg-background px-4 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent sm:text-xs">
            Now
          </p>
          <h2
            id="current-experience-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl"
          >
            Current Experience
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_28px_60px_-36px_rgba(0,0,0,0.55)] sm:mt-10 sm:rounded-4xl md:mt-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 select-none font-display text-[9rem] font-black leading-none tracking-tighter text-foreground/4 sm:text-[11rem]"
            >
              01
            </div>

            <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div
                className="relative border-b border-border px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r"
                style={{ backgroundImage: PANEL_GRADIENT }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-green-400 sm:text-[11px]">
                  <span aria-hidden className="presence-dot" />
                  Current Role
                </span>

                <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-[2rem]">
                  {title}
                </h3>

                {organization && (
                  <p className="mt-2 flex items-center gap-2 text-base text-accent sm:text-lg">
                    <LuBriefcase
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    {organization}
                  </p>
                )}

                <div className="mt-5 flex flex-col gap-2.5 text-sm text-text-muted sm:text-[15px]">
                  {duration && (
                    <span className="inline-flex items-center gap-2">
                      <LuCalendar
                        className="h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {duration}
                    </span>
                  )}
                  {location && (
                    <span className="inline-flex items-center gap-2">
                      <LuMapPin
                        className="h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {location}
                    </span>
                  )}
                  {employmentType && (
                    <span className="w-fit rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted sm:text-[11px]">
                      {employmentType}
                    </span>
                  )}
                </div>

                {description && (
                  <p className="mt-6 max-w-prose text-sm leading-relaxed text-text sm:text-base">
                    {description}
                  </p>
                )}
              </div>

              <div className="relative px-6 py-8 sm:px-8 sm:py-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-text-muted sm:text-xs">
                  Key Contributions
                </p>

                <ol className="mt-5 space-y-5 sm:space-y-6">
                  {achievements.map((item, index) => (
                    <li key={item} className="flex gap-4 sm:gap-5">
                      <span
                        aria-hidden
                        className="font-display text-2xl font-black leading-none text-accent/35 sm:text-3xl"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-text sm:text-[15px]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>

                {technologies.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/15 bg-accent/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent sm:text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {projectCount > 0 && organization && (
              <>
                <button
                  type="button"
                  onClick={handleToggleProjects}
                  aria-expanded={showProjects}
                  aria-controls="experience-projects-panel"
                  className="group flex w-full items-center justify-center gap-2.5 border-t border-accent/30 bg-accent px-6 py-4 transition-colors duration-300 hover:bg-accent-dark sm:gap-3 sm:py-5"
                >
                  <span className="font-heading text-base font-bold tracking-tight text-background sm:text-lg">
                    {showProjects ? "Hide projects" : "View projects"}
                  </span>

                  <LuChevronDown
                    aria-hidden
                    className={cn(
                      "h-4 w-4 text-background transition-transform duration-300",
                      showProjects && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {showProjects && (
                    <motion.div
                      ref={projectsRef}
                      id="experience-projects-panel"
                      key="experience-projects"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-border bg-background/15"
                    >
                      <ExperienceProjectsList organization={organization} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </article>
        </Reveal>
      </div>
    </section>
  );
}
