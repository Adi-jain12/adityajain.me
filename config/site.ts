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

  location: {
    tagline: "Coding and Building . . .",
    place: "Ahmedabad, India",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com/adityajain" },
    { label: "Twitter", href: "https://twitter.com/adityajain" },
    { label: "LinkedIn", href: "https://linkedin.com/in/adityajain" },
  ],
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GraphQL",
    "AWS",
  ],
} as const;
