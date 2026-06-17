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

  highlights: [
    {
      icon: "rocket",
      title: "Building Products",
      description: "Creating applications that solve real problems.",
    },
    {
      icon: "palette",
      title: "Design Engineering",
      description: "Combining aesthetics with functionality.",
    },
    {
      icon: "zap",
      title: "Performance",
      description: "Fast, responsive, and optimized experiences.",
    },
    {
      icon: "book",
      title: "Continuous Learning",
      description: "Always exploring new technologies and ideas.",
    },
  ],

  techStack: [
    {
      id: "frontend",
      label: "Frontend",
      items: [
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "next" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      items: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "REST APIs" },
        { name: "GraphQL" },
        { name: "JWT" },
      ],
    },
    {
      id: "databases",
      label: "Databases",
      items: [
        { name: "PostgreSQL", icon: "postgres" },
        { name: "MongoDB", icon: "mongodb" },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      items: [
        { name: "Docker", icon: "docker" },
        { name: "Vercel", icon: "vercel" },
      ],
    },
    {
      id: "tools",
      label: "Tools",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
      ],
    },
  ],

  sections: [
    {
      heading: "experiences",
      entries: [
        {
          title: "Web Developer",
          organization: "Yudiz Solutions Ltd.",
          duration: "December 2024 — May 2026",
          location: "Ahmedabad, India",
          employmentType: "Full-time",
          description:
            "Built production React.js and Next.js applications with API integrations, real-time communication, and frontend performance improvements.",
          achievements: [
            "Built React.js and Next.js modules for production web applications, leveraging SSR and ISR to improve initial page rendering and SEO.",
            "Integrated RESTful APIs and Socket.IO-based real-time communication to deliver live updates and dynamic user experiences.",
            "Optimized frontend performance through lazy loading, code splitting, and memoization, reducing unnecessary re-renders in data-intensive views.",
            "Collaborated with product, QA, and backend teams throughout feature development, testing, and release cycles.",
          ],
          technologies: [
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Socket.IO",
          ],
        },
        {
          title: "Software Engineer",
          organization: "Optimized Solutions Ltd.",
          duration: "February 2023 — March 2024",
          location: "Ahmedabad, India",
          employmentType: "Full-time",
          description:
            "Developed responsive React.js interfaces, integrated APIs, and improved MongoDB performance across application features.",
          achievements: [
            "Developed responsive React.js interfaces for internal and customer-facing applications.",
            "Integrated RESTful APIs to enable seamless communication between frontend and backend systems.",
            "Improved MongoDB query performance through indexing and aggregation pipelines.",
            "Contributed to feature development, testing, and debugging throughout the software development lifecycle.",
          ],
          technologies: ["React", "REST APIs", "MongoDB", "JavaScript"],
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
