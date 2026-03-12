import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project, ProjectSize } from "../types";

interface ProjectCardProps {
  project: Project;
}

const sizeClasses: Record<ProjectSize, string> = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 row-span-2",
  wide: "col-span-2 row-span-1",
  large: "col-span-2 row-span-2",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const size = project.size ?? "small";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg border border-border bg-surface",
        sizeClasses[size]
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-[filter] duration-500 group-hover:blur-xs"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      ) : (
        <div className="absolute inset-0 bg-surface" />
      )}

      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center",
          "bg-black/0 transition-all duration-500 group-hover:bg-black/50"
        )}
      >
        <p
          className={cn(
            "font-mono text-center text-sm font-semibold tracking-wide text-white md:text-sm lg:text-sm",
            "translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          {project.title}
        </p>
        {project.category && (
          <span
            className={cn(
              "mt-1.5 text-xs tracking-widest text-white/70 md:text-sm",
              "translate-y-2 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100"
            )}
          >
            [{project.category}]
          </span>
        )}
      </div>
    </Link>
  );
}
