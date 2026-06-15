export interface AboutEntry {
  title: string;
  organization?: string;
  organizationUrl?: string;
  duration?: string;
  location?: string;
  employmentType?: string;
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
  | "graphql";

export interface TechItem {
  name: string;
  icon: TechIconKey;
}

export type HighlightIconKey = "rocket" | "palette" | "zap" | "book";

export interface AboutHighlight {
  icon: HighlightIconKey;
  title: string;
  description: string;
}

export interface AboutData {
  headline: string;
  description: string[];
  photoCaption?: string;
  highlights?: AboutHighlight[];
  techStack?: TechItem[];
  sections: AboutSection[];
}
