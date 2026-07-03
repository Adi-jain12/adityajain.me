import type { AboutData } from "../types";

export const aboutData: AboutData = {
  headline:
    "Aditya Jain is a web developer with a passion for clean code, thoughtful design, and shipping products.",

  description: [
    "I'm a Full-Stack Developer who enjoys building web applications that are both technically robust and thoughtfully designed. My interests lie at the intersection of engineering and user experience where clean architecture, scalable systems, and intuitive interfaces come together to create meaningful products.",
    "With experience across the MERN stack, Next.js, PostgreSQL, AWS, and modern web technologies, I focus on building applications that are maintainable, performant, and user-centric. I care deeply about the craft of software development from designing efficient APIs and structuring codebases to refining the details that make a product feel polished.",
    "Beyond professional work, I enjoy exploring new technologies, experimenting with side projects, and staying current with advancements in web development, cloud technologies, and AI-powered tools. I'm constantly learning, building, and looking for better ways to turn ideas into impactful digital experiences.",
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
      title: "User-Centered Engineering",
      description: "Crafting intuitive interfaces backed by robust architecture.",


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
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React.js", icon: "react" },
        { name: "Next.js", icon: "next" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      items: [
        { name: "Node.js", icon: "node" },
        { name: "Express.js", icon: "express" },
        { name: "GraphQL", icon: "graphql" },
        { name: "Socket.IO", icon: "socketio" },
      ],
    },
    {
      id: "databases",
      label: "Database",
      items: [
        { name: "PostgreSQL", icon: "postgres" },
        { name: "MongoDB", icon: "mongodb" },
        // { name: "Redis", icon: "redis" },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      items: [
        { name: "AWS (EC2 & S3)", icon: "aws" },
        { name: "Docker", icon: "docker" },
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
          title: "Master of Science in Information Technology (MS-IT)",
          organization:
            "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)",
        },
      ],
    },
  ],
};


