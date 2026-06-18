"use client";

import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuExternalLink, LuGithub } from "react-icons/lu";
import { Chip, chipMobileTextOffset, getChipClassName } from "@/components/ui/Chip";
import { getProjectsByCompany } from "@/features/projects";
import type { Project } from "@/features/projects/types";

function CompactProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="flex flex-col gap-4 border-b border-border px-6 py-6 last:border-b-0 sm:flex-row sm:items-stretch sm:px-8 sm:py-7">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block h-44 w-full shrink-0 overflow-hidden rounded-xl border border-border sm:h-auto sm:w-44 md:w-52"
        aria-label={`View ${project.title} project details`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 208px"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-br from-surface-hover to-surface"
          />
        )}
        <span
          aria-hidden
          className="absolute bottom-3 left-3 font-display text-2xl font-black leading-none text-white/25"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2">
          {project.category && (
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:text-[11px]">
              {project.category}
            </span>
          )}
          {project.year && (
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted sm:text-[11px]">
              {project.year}
            </span>
          )}
        </div>

        <h4 className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h4>

        <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-[15px]">
          {project.description}
        </p>

        {project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag} variant="accent">
                {tag}
              </Chip>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <Link
            href={`/projects/${project.slug}`}
            className={getChipClassName("accentOutline")}
          >
            <span className={chipMobileTextOffset}>Case study</span>
            <LuArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={getChipClassName("outline")}
            >
              <span className={chipMobileTextOffset}>Live</span>
              <LuExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={getChipClassName("outline")}
            >
              <span className={chipMobileTextOffset}>Code</span>
              <LuGithub className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

interface ExperienceProjectsListProps {
  organization: string;
}

export function ExperienceProjectsList({
  organization,
}: ExperienceProjectsListProps) {
  const experienceProjects = getProjectsByCompany(organization);
  if (experienceProjects.length === 0) return null;

  return (
    <div aria-labelledby="experience-projects-heading">
      <div className="border-b border-border px-6 py-5 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted sm:text-[11px]">
          Shipped at {organization}
        </p>
        <h3
          id="experience-projects-heading"
          className="mt-2 font-heading text-xl font-bold tracking-tight text-text sm:text-2xl"
        >
          Projects from this role
        </h3>
      </div>

      <div>
        {experienceProjects.map((project, index) => (
          <CompactProjectItem
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center border-t border-border px-6 py-5 sm:px-8">
        <Link
          href="/projects"
          className={getChipClassName(
            "outline",
            "group bg-background/50 text-text hover:border-accent/30"
          )}
        >
          <span className={chipMobileTextOffset}>View all projects</span>
          <LuArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
