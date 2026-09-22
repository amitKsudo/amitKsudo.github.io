export interface SkillItem {
  name: string;
  category: 'Languages' | 'Libraries' | 'Databases' | 'Tools' | 'Methodologies';
  level: 'Proficient' | 'Hands-on' | 'Certified';
  context: string;
  tag?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  topics: string[];
  description: string;
  certificateUrl?: string;
  credentialId?: string;
}

export interface EducationInfo {
  degree: string;
  major: string;
  minorOrElective: string;
  institution: string;
  timeline: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  techStack: string[];
  linkUrl?: string;
  linkText?: string;
}
