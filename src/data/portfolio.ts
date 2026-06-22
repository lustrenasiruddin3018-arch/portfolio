import { Project, Experience, Education, Skill, Testimonial, Service, BlogPost } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    longDescription: 'Built a comprehensive e-commerce platform featuring real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of concurrent users with optimized database queries and caching strategies.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    category: 'Full Stack',
    status: 'completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: ['Real-time inventory', 'Payment integration', 'Admin dashboard', 'Analytics'],
    challenges: ['Scaling to 10k+ users', 'Real-time sync', 'Payment security']
  },
  {
    id: '2',
    title: 'AI Dashboard',
    description: 'Machine learning analytics dashboard with data visualization',
    longDescription: 'Developed an AI-powered analytics dashboard that processes and visualizes complex datasets. Features include predictive modeling, automated reporting, and interactive charts for business intelligence.',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'],
    category: 'Data Science',
    status: 'completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: ['Predictive analytics', 'Interactive charts', 'Auto-reporting', 'ML models'],
    challenges: ['Large dataset processing', 'Model optimization', 'Real-time updates']
  },
  {
    id: '3',
    title: 'Social Media App',
    description: 'Mobile-first social platform with real-time messaging',
    longDescription: 'Created a social media application with real-time messaging, content sharing, and community features. Implemented WebSocket connections for instant updates and push notifications.',
    image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'TypeScript'],
    category: 'Mobile',
    status: 'completed',
    githubUrl: 'https://github.com',
    features: ['Real-time chat', 'Push notifications', 'Content feed', 'User profiles'],
    challenges: ['Offline support', 'Message sync', 'Performance optimization']
  },
  {
    id: '4',
    title: 'DevOps Pipeline',
    description: 'CI/CD automation platform with monitoring and alerts',
    longDescription: 'Engineered a complete DevOps pipeline with automated testing, deployment, and monitoring. Reduced deployment time by 80% and improved system reliability with proactive alerting.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
    category: 'DevOps',
    status: 'completed',
    githubUrl: 'https://github.com',
    features: ['Auto-deployment', 'Container orchestration', 'Monitoring', 'IaC'],
    challenges: ['Multi-cloud setup', 'Zero-downtime deploys', 'Security compliance']
  },
  {
    id: '5',
    title: 'FinTech API',
    description: 'Secure financial API with blockchain integration',
    longDescription: 'Built a secure financial API handling transactions, account management, and blockchain integration. Implemented advanced encryption and compliance with financial regulations.',
    image: 'https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Web3.js', 'Solidity'],
    category: 'Backend',
    status: 'in-progress',
    githubUrl: 'https://github.com',
    features: ['Secure transactions', 'Blockchain sync', 'Multi-currency', 'Compliance'],
    challenges: ['Security audits', 'Blockchain latency', 'Regulatory compliance']
  },
  {
    id: '6',
    title: 'Design System',
    description: 'Comprehensive UI component library with documentation',
    longDescription: 'Created a comprehensive design system with 50+ reusable components, complete documentation, and accessibility features. Used across multiple projects ensuring design consistency.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Storybook', 'TypeScript', 'CSS Modules'],
    category: 'UI/UX',
    status: 'completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    features: ['50+ components', 'Accessibility', 'Theming', 'Documentation'],
    challenges: ['Cross-browser support', 'Accessibility standards', 'Performance']
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    role: 'Senior Full Stack Developer',
    type: 'full-time',
    startDate: '2022-01',
    endDate: 'Present',
    description: 'Leading development of enterprise web applications and mentoring junior developers.',
    responsibilities: [
      'Architect and develop scalable web applications',
      'Lead a team of 5 developers',
      'Implement CI/CD pipelines',
      'Code review and quality assurance'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    id: '2',
    company: 'Digital Innovations',
    role: 'Full Stack Developer',
    type: 'full-time',
    startDate: '2020-03',
    endDate: '2021-12',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    responsibilities: [
      'Built responsive web applications',
      'Integrated third-party APIs',
      'Optimized application performance',
      'Collaborated with design team'
    ],
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis']
  },
  {
    id: '3',
    company: 'Freelance',
    role: 'Web Developer & Consultant',
    type: 'freelance',
    startDate: '2019-06',
    endDate: '2020-02',
    description: 'Delivered custom web solutions for various clients across different industries.',
    responsibilities: [
      'Client requirements analysis',
      'Custom website development',
      'Technical consulting',
      'Project management'
    ],
    technologies: ['React', 'Node.js', 'WordPress', 'Shopify']
  },
  {
    id: '4',
    company: 'StartUp Hub',
    role: 'Junior Developer Intern',
    type: 'internship',
    startDate: '2018-09',
    endDate: '2019-05',
    description: 'Gained hands-on experience in full-stack development within an agile team.',
    responsibilities: [
      'Frontend development with React',
      'API integration',
      'Bug fixing and testing',
      'Agile sprint participation'
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'REST APIs']
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Technology',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: '2019',
    endDate: '2021',
    grade: 'Distinction',
    achievements: [
      'Published research paper on distributed systems',
      'Teaching Assistant for Advanced Algorithms',
      'Dean\'s List all semesters'
    ]
  },
  {
    id: '2',
    institution: 'State University',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    startDate: '2015',
    endDate: '2019',
    grade: 'First Class Honors',
    achievements: [
      'President of Computer Science Society',
      'Hackathon winner 2018',
      'GPA: 3.9/4.0'
    ]
  }
];

export const skills: Skill[] = [
  { id: '1', name: 'React', category: 'Frontend', proficiency: 95, icon: 'Code2' },
  { id: '2', name: 'TypeScript', category: 'Frontend', proficiency: 90, icon: 'FileCode' },
  { id: '3', name: 'Node.js', category: 'Backend', proficiency: 88, icon: 'Server' },
  { id: '4', name: 'Python', category: 'Backend', proficiency: 85, icon: 'Terminal' },
  { id: '5', name: 'PostgreSQL', category: 'Database', proficiency: 82, icon: 'Database' },
  { id: '6', name: 'MongoDB', category: 'Database', proficiency: 80, icon: 'Database' },
  { id: '7', name: 'Docker', category: 'DevOps', proficiency: 78, icon: 'Container' },
  { id: '8', name: 'AWS', category: 'DevOps', proficiency: 75, icon: 'Cloud' },
  { id: '9', name: 'GraphQL', category: 'Backend', proficiency: 85, icon: 'Share2' },
  { id: '10', name: 'Tailwind CSS', category: 'Frontend', proficiency: 92, icon: 'Palette' },
  { id: '11', name: 'Git', category: 'Tools', proficiency: 90, icon: 'GitBranch' },
  { id: '12', name: 'Figma', category: 'Design', proficiency: 80, icon: 'Figma' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Alex delivered exceptional work on our platform. His technical expertise and attention to detail transformed our vision into reality. Highly recommended!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Systems',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Working with Alex was a game-changer for our startup. He built a scalable architecture that handled our growth seamlessly. True professional!',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateLab',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Alex\'s ability to understand complex requirements and deliver clean, maintainable code is remarkable. Our product quality improved significantly.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Founder',
    company: 'NextGen Apps',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Exceptional developer with great communication skills. Alex consistently delivered ahead of schedule and exceeded expectations.',
    rating: 5
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices',
    icon: 'Globe',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'CMS Integration'],
    price: 'From $2,500'
  },
  {
    id: '2',
    title: 'Frontend Development',
    description: 'Pixel-perfect UI implementation with React, Vue, or Angular',
    icon: 'Layout',
    features: ['React/Vue/Angular', 'Animation & Effects', 'Accessibility', 'Cross-browser Support'],
    price: 'From $1,800'
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Robust APIs and server-side solutions for scalable applications',
    icon: 'Server',
    features: ['REST/GraphQL APIs', 'Database Design', 'Authentication', 'Cloud Deployment'],
    price: 'From $2,000'
  },
  {
    id: '4',
    title: 'Full-Stack Development',
    description: 'End-to-end application development from database to UI',
    icon: 'Layers',
    features: ['Complete Solutions', 'Database to UI', 'DevOps Setup', 'Maintenance'],
    price: 'From $4,000'
  },
  {
    id: '5',
    title: 'UI/UX Design',
    description: 'User-centered design with modern aesthetics and usability',
    icon: 'Palette',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    price: 'From $1,500'
  },
  {
    id: '6',
    title: 'Technical Consulting',
    description: 'Expert advice on architecture, technology stack, and best practices',
    icon: 'MessageSquare',
    features: ['Architecture Review', 'Tech Stack Advice', 'Code Audit', 'Team Training'],
    price: 'From $150/hr'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for structuring large-scale React applications with proper state management and component architecture.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Development',
    tags: ['React', 'Architecture', 'Best Practices'],
    readTime: 8,
    publishedAt: '2024-01-15',
    author: 'Alex Morgan'
  },
  {
    id: '2',
    title: 'Modern CSS with Tailwind',
    excerpt: 'Discover how Tailwind CSS can transform your workflow and help you build beautiful interfaces faster than ever.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'CSS',
    tags: ['Tailwind', 'CSS', 'Design'],
    readTime: 6,
    publishedAt: '2024-01-10',
    author: 'Alex Morgan'
  },
  {
    id: '3',
    title: 'API Design Patterns',
    excerpt: 'Explore common API design patterns and learn how to build robust, maintainable APIs for your applications.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Backend',
    tags: ['API', 'REST', 'GraphQL'],
    readTime: 10,
    publishedAt: '2024-01-05',
    author: 'Alex Morgan'
  },
  {
    id: '4',
    title: 'DevOps for Developers',
    excerpt: 'A practical guide to implementing DevOps practices in your development workflow for better deployment and reliability.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'DevOps',
    tags: ['Docker', 'CI/CD', 'AWS'],
    readTime: 12,
    publishedAt: '2023-12-28',
    author: 'Alex Morgan'
  }
];
