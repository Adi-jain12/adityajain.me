import type { AboutData } from "../types";

export const aboutData: AboutData = {
  bio: [
    "I'm Aditya Jain — a developer and creator who loves building things for the web. I care deeply about clean code, thoughtful design, and shipping products that people enjoy using.",
    "I'm drawn to the intersection of engineering and design, where technical decisions shape user experience. Whether it's a polished UI, a performant API, or a well-structured codebase, I believe the details matter.",
    "When I'm not coding, you'll find me exploring new technologies, reading about software architecture, or working on side projects that scratch a creative itch.",
  ],

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Figma", "Vercel", "Docker"],
    },
  ],

  currently: [
    "Building this portfolio and other side projects",
    "Exploring AI-powered developer tooling",
    "Learning system design patterns",
  ],
};
