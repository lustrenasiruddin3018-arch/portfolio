export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  challenges: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
  achievements: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}
