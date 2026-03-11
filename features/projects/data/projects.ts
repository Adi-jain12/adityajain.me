import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A brief description of the first project and what it accomplishes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/project-one.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adityajain/project-one",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "A brief description of the second project and what it accomplishes.",
    tags: ["React", "Node.js"],
    image: "/images/projects/project-two.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adityajain/project-two",
  },
];
