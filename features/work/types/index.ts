export interface WorkExperience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | null;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface WorkData {
  experiences: WorkExperience[];
}
