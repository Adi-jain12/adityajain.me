import { ProjectGrid, getAllProjects } from "@/features/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-16">
      <SectionHeading>All Projects</SectionHeading>
      <p className="mt-4 text-lg">
        A collection of things I&apos;ve built.
      </p>
      <div className="mt-8">
        <ProjectGrid projects={projects} />
      </div>
    </Container>
  );
}
