export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  methodology: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  keyImpact: string;
}

export interface ResearchInterest {
  id: string;
  title: string;
  summary: string;
  keyTopics: string[];
  equationSample?: string;
  equationDescription?: string;
}

export interface PaperFinish {
  id: string;
  name: string;
  font: string;
  bgColor: string;
  cardColor: string;
  textColor: string;
  subtextColor: string;
  borderColor: string;
  watermarkText: string;
  description: string;
}
