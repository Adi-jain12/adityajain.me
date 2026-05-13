import type { AboutData } from "../types";

export const aboutData: AboutData = {
  headline:
    "Aditya Jain is a web developer with a passion for clean code, thoughtful design, and shipping products.",

  description: [
    "His programmatic interests revolve around the intersection of engineering and design — how thoughtful technical decisions can shape product experience, and how small details compound into great software. He is drawn to clean code, well-structured systems, and interfaces that feel inevitable.",
    "His current practice spans full-stack web development, design engineering, and side projects that scratch a creative itch. He cares about the craft of building: the quality of an API, the rhythm of a UI, the architecture of a codebase, and the experience of the people who use what he ships.",
    "When he isn't writing code, he is reading about software architecture, exploring AI-powered developer tooling, and building things on the web for the joy of it.",
  ],

  photoCaption: "Photo of Aditya",

  techStack: [
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "next" },
    { name: "Node.js", icon: "node" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Framer Motion", icon: "framer" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Python", icon: "python" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Figma", icon: "figma" },
  ],

  sections: [
    {
      heading: "experiences",
      entries: [
        {
          title: "Web Developer",
          organization: "Yudiz Solutions Ltd.",
          duration: "2024 — Present",
          location: "Full-time",
          current: true,
          description:
            "Designing and shipping production-grade web applications for clients across product, marketing, and content domains.",
          achievements: [
            "Architected and shipped 5+ full-stack apps from zero to production using Next.js and TypeScript.",
            "Built reusable design systems that reduced new-feature delivery time by ~40%.",
            "Owned the full delivery cycle — discovery, design, implementation, deployment, and iteration.",
          ],
          technologies: [
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
          ],
        },
        {
          title: "Frontend Developer",
          organization: "Optimized Solutions Ltd.",
          duration: "2023 — 2024",
          location: "Full-time",
          description:
            "Focused on building interactive, animation-rich interfaces and polishing developer experience across multiple side projects.",
          achievements: [
            "Implemented motion systems with Framer Motion and Lenis for premium-feeling product UIs.",
            "Migrated legacy CRA apps to Next.js App Router with measurable performance gains.",
            "Improved Core Web Vitals on shipped pages to consistent green scores.",
          ],
          technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
        },
      ],
    },


    {
      heading: "education",
      entries: [
        {
          title: "M.S. in Information Technology",
          organization:
            "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)",
        },
      ],
    },
  ],
};
