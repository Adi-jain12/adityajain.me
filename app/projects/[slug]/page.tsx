import { notFound } from "next/navigation";
import {
  ProjectDetail,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/features/projects";
import { Container } from "@/components/ui/Container";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-10 sm:py-16">
      <section className="mx-auto max-w-7xl">
        <ProjectDetail project={project} />
      </section>
    </Container>
  );
}
