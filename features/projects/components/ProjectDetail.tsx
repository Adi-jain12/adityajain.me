import Image from "next/image";
import { Chip } from "@/components/ui/Chip";
import type { Project } from "../types";

const CTA_BUTTON_CLASS =
  "btn-magnetic group relative inline-flex min-h-11 w-full min-w-0 flex-row items-center justify-center gap-2 rounded-full px-5 text-base leading-none tracking-tight whitespace-nowrap sm:min-h-12 sm:px-6";

const CTA_RED = "#cd5230";
const CREAM = "#F1E7D2";

interface ProjectDetailProps {
  project: Project;
}

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex">
      <p className="flex-1 text-text-muted">{label}</p>
      <div className="flex-1 text-text">{children}</div>
    </div>
  );
}

function TechPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <Chip key={tech} variant="accent">
          {tech}
        </Chip>
      ))}
    </div>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={`transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
      aria-hidden
    >
      <path
        d="M3 9 L9 3 M4 3 H9 V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectLinkPrimary({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${CTA_BUTTON_CLASS} overflow-hidden`}
      style={{
        backgroundColor: CTA_RED,
        color: CREAM,
        boxShadow: "0 14px 32px -16px rgba(224,75,34,0.65)",
      }}
    >
      <span className="relative z-10 mt-2 shrink-0">{label}</span>
      <ArrowUpRight className="relative z-10 block h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0))",
        }}
      />
    </a>
  );
}

function ProjectLinkSecondary({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${CTA_BUTTON_CLASS} border border-text/65 text-text transition-colors duration-300 hover:bg-text hover:text-background`}
    >
      <span className="mt-2 shrink-0">{label}</span>
      <ArrowUpRight className="block h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
    </a>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const hasLinks = project.liveUrl || project.githubUrl;

  return (
    <article className="flex flex-col gap-8 sm:gap-8">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
        {project.title}
      </h1>

      {project.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-surface">
          <Image
            src={project.image}
            alt={`${project.title} Project`}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      )}

      <div className="flex flex-col gap-8 py-4 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-col gap-4 md:gap-8">
          {project.tags.length > 0 && (
            <MetaRow label="Tech stack">
              <TechPills items={project.tags} />
            </MetaRow>
          )}
          {hasLinks && (
            <MetaRow label="Links">
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <ProjectLinkPrimary href={project.liveUrl} label="Website" />
                )}
                {project.githubUrl && (
                  <ProjectLinkSecondary href={project.githubUrl} label="GitHub" />
                )}
              </div>
            </MetaRow>
          )}
        </div>

        {project.description && (
          <div className="flex flex-1 flex-col gap-4 md:sticky md:top-20 md:h-fit">
            <p className="leading-relaxed text-text">{project.description}</p>
          </div>
        )}
      </div>
    </article>
  );
}
