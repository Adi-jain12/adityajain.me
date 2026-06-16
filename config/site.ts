export const siteConfig = {
  name: "Aditya Jain",
  title: "Aditya Jain | Full-Stack Developer",
  description:
    "Full-Stack Developer building modern web applications from frontend to backend, focused on performance, scalability, and user experience.",
  url: "https://adityajain.me",
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
    // { label: "Work", href: "/work" },
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com/adityajain" },
    { label: "Twitter", href: "https://twitter.com/adityajain" },
    { label: "LinkedIn", href: "https://linkedin.com/in/adityajain" },
  ],
} as const;
