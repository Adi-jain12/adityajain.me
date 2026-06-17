import { projects } from "../data/projects";
import type { Project } from "../types";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectsByCompany(company: string): Project[] {
  return projects
    .filter((project) => project.company === company)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}
