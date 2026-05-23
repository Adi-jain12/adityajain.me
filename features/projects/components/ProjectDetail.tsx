import Image from "next/image";
import type { Project } from "../types";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="py-10 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg">
        {project.description}
      </p>

      {project.image && (
        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 sm:mt-8 dark:border-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            className="w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-foreground dark:bg-zinc-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] sm:px-5 sm:py-2.5 dark:hover:bg-[#ccc]"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 sm:px-5 sm:py-2.5 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            Source Code
          </a>
        )}
      </div>
    </article>
  );
}
