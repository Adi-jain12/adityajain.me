export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface WorkData {
  experiences: WorkExperience[];
}
