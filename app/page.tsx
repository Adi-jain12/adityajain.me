import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { ProjectGrid, getAllProjects } from "@/features/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export default function Home() {
  const projects = getAllProjects();

  return (
    <Container>
      <Hero />
      <About />
      <section className="py-16">
        <div className="flex items-center justify-between">
          <SectionHeading>Projects</SectionHeading>
          <Link
            href="/projects"
            className="text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-8">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </Container>
  );
}
