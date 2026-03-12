export type ProjectSize = "small" | "medium" | "wide" | "large";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category?: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  size?: ProjectSize;
}
