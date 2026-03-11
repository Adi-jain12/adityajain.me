import { notFound } from "next/navigation";
import {
  ProjectDetail,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/features/projects";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

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
    <Container>
      <Link
        href="/projects"
        className="inline-block py-8 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
      >
        &larr; Back to projects
      </Link>
      <ProjectDetail project={project} />
    </Container>
  );
}
