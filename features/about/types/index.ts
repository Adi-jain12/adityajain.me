export interface AboutEntry {
  title: string;
  organization?: string;
  organizationUrl?: string;
  duration?: string;
  location?: string;
  current?: boolean;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  url?: string;
}

export interface AboutSection {
  heading: string;
  entries: AboutEntry[];
}

export type TechIconKey =
  | "react"
  | "next"
  | "typescript"
  | "javascript"
  | "node"
  | "tailwind"
  | "postgres"
  | "git"
  | "github"
  | "figma"
  | "docker"
  | "vercel"
  | "python"
  | "framer";

export interface TechItem {
  name: string;
  icon: TechIconKey;
}

export interface AboutData {
  headline: string;
  description: string[];
  photoCaption?: string;
  techStack?: TechItem[];
  sections: AboutSection[];
}
