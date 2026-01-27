export interface ExpertiseCard {
  id: number;
  icon: string;
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface InsightArticle {
  icon: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export interface FooterSection {
  title: string;
  links: string[];
  hidden?: boolean;
}

export interface NavigationItem {
  label: string;
  page: PageType;
}

export type PageType = 'home' | 'about' | 'services' | 'process' | 'insights' | 'contact';