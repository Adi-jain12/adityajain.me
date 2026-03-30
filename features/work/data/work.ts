import type { WorkData } from "../types";

export const workData: WorkData = {
  experiences: [
    {
      company: "Acme Corp",
      role: "Senior Software Engineer",
      location: "Remote",
      type: "Full-time",
      startDate: "Jan 2024",
      endDate: null,
      description:
        "Leading frontend architecture and building performant, accessible web applications for a SaaS platform serving thousands of users.",
      highlights: [
        "Architected a component library that reduced development time by 40%",
        "Led migration from legacy codebase to Next.js, improving page load by 60%",
        "Mentored junior developers and established code review practices",
        "Implemented CI/CD pipelines and automated testing workflows",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
      companyUrl: "https://example.com",
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      location: "Bangalore, India",
      type: "Full-time",
      startDate: "Jun 2022",
      endDate: "Dec 2023",
      description:
        "Built and shipped customer-facing features for a fintech product, working closely with design and product teams in an agile environment.",
      highlights: [
        "Developed a real-time dashboard used by 500+ daily active users",
        "Reduced bundle size by 35% through code splitting and lazy loading",
        "Built reusable form components with complex validation logic",
        "Collaborated with backend team to design RESTful API contracts",
      ],
      technologies: ["React", "TypeScript", "Node.js", "REST APIs", "Figma"],
      companyUrl: "https://example.com",
    },
    {
      company: "Freelance",
      role: "Web Developer",
      location: "Remote",
      type: "Freelance",
      startDate: "Jan 2021",
      endDate: "May 2022",
      description:
        "Designed and developed websites and web applications for small businesses and startups, handling everything from requirements to deployment.",
      highlights: [
        "Delivered 10+ client projects on time and within budget",
        "Built e-commerce solutions with payment gateway integration",
        "Designed responsive, mobile-first interfaces from scratch",
      ],
      technologies: ["React", "JavaScript", "CSS", "Firebase", "Stripe"],
    },
    {
      company: "TechLabs",
      role: "Software Engineering Intern",
      location: "Delhi, India",
      type: "Internship",
      startDate: "Jun 2020",
      endDate: "Dec 2020",
      description:
        "Worked on internal tools and contributed to the core product, gaining hands-on experience with modern web development practices.",
      highlights: [
        "Built an internal admin panel used across departments",
        "Wrote unit and integration tests, improving coverage to 80%",
        "Participated in daily standups and sprint planning ceremonies",
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB"],
      companyUrl: "https://example.com",
    },
  ],
};
