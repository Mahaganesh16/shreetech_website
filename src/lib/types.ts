export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  accentColor: string;
  badge: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface TechnologyItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'cloud' | 'ai';
  categoryLabel: string;
  icon: string;
  description: string;
  proficiency: number;
  featured: boolean;
  tagline: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-cloud' | 'web' | 'mobile' | 'fintech';
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  results: string;
  client: string;
  year: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectScope: string;
  verificationBadge: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  timeline: string;
  details: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric: string;
  metricLabel: string;
  accent: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  version: string;
  badge: string;
  description: string;
  features: string[];
  status: 'Live' | 'Enterprise Ready' | 'Active Deployment';
  techStack: string[];
}

