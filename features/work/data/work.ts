import type { WorkData } from "../types";

export const workData: WorkData = {
  experiences: [
    {
      role: "Web Developer",
      company: "Yudiz Solutions Ltd.",
      location: "Full-time",
      startDate: "2024",
      endDate: null,
      type: "Product engineering",
      description:
        "Designing and shipping production-grade web applications across product, marketing, and content domains.",
      highlights: [
        "Built full-stack applications with Next.js, TypeScript, and API-first backend patterns.",
        "Created reusable UI systems to keep delivery fast, consistent, and easier to maintain.",
        "Collaborated across discovery, implementation, deployment, and iteration.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      role: "Frontend Developer",
      company: "Optimized Solutions Ltd.",
      location: "Full-time",
      startDate: "2023",
      endDate: "2024",
      type: "Frontend engineering",
      description:
        "Focused on responsive, animation-rich interfaces and stronger developer experience across modern React projects.",
      highlights: [
        "Implemented polished interaction systems with React, Framer Motion, and utility-first styling.",
        "Improved page performance and interface consistency across shipped features.",
        "Contributed to migrations and refactors that made projects easier to extend.",
      ],
      technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    },
  ],
};
