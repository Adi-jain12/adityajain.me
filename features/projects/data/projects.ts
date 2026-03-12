import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A brief description of the first project and what it accomplishes.",
    category: "Website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/spiderman.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adityajain/project-one",
    size: "large",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "A brief description of the second project and what it accomplishes.",
    category: "App",
    tags: ["React", "Node.js"],
    image: "/images/projects/sleeping-dog.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adityajain/project-two",
    size: "wide",
  },
];
