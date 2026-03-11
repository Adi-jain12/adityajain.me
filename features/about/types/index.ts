export interface Skill {
  category: string;
  items: string[];
}

export interface AboutData {
  bio: string[];
  skills: Skill[];
  currently: string[];
}
