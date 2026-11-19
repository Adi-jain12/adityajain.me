export const siteConfig = {
  name: "Aditya Jain",
  title: "Aditya Jain | Full-Stack Developer",
  description:
    "Full-Stack Developer building modern web applications from frontend to backend, focused on performance, scalability, and user experience.",
   url: "https://www.adityajaindev.com",
   openGraph: {
    title: "Aditya Jain | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web applications from frontend to backend, focused on performance, scalability, and user experience.",
    images: ["/og-image.png"],
  },
  email: "jaditya98@gmail.com",
  copyright: "© Aditya Jain 2026",
  contact: {
    email: "jaditya98@gmail.com",
    phone: "+91 9825000000",
    address: "Ahmedabad, India",
  },

  location: {
    tagline: "Coding and Building . . .",
    place: "Ahmedabad, India",
  },

  skills: [
    { label: "Next.js", href: "https://nextjs.org/" },
    { label: "TypeScript", href: "https://www.typescriptlang.org/" },
    { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
    { label: "React.js", href: "https://react.dev/" },
    { label: "Node.js", href: "https://nodejs.org/" },
    { label: "MongoDB", href: "https://www.mongodb.com/" },
    { label: "PostgreSQL", href: "https://www.postgresql.org/" },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com/Adi-jain12" },
    { label: "Twitter", href: "https://x.com/adiev_12" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-jain1211/" },
  ],
  techStack: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Git",
    "GraphQL",
    "AWS",
    "Docker",
  ],
} as const;
