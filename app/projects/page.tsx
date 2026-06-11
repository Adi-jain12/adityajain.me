import { ProjectGrid, getAllProjects } from "@/features/projects";
import { Container } from "@/components/ui/Container";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
          <span className="text-accent">Projects</span>
        </h1>
        <p className="mt-3 text-base text-text-muted sm:mt-4 sm:text-lg">
          A collection of things I&apos;ve built.
        </p>
        <div className="mt-8 sm:mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </Container>
  );
}
