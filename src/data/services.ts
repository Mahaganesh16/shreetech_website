export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'High-performance corporate websites and modern web platforms built with Next.js, React, and TypeScript. Optimized for sub-second load times, technical SEO, and exceptional responsiveness.',
    iconName: 'Globe',
    deliverables: ['Custom Next.js & React Architectures', 'Core Web Vitals & Technical SEO', 'Responsive Cross-Device Layouts', 'Headless CMS Integration']
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile apps for iOS and Android powered by Flutter and React Native. Smooth 60 FPS interfaces, offline-first synchronization, and secure biometrics.',
    iconName: 'Smartphone',
    deliverables: ['Cross-Platform Flutter & React Native', 'App Store & Play Store Deployments', 'Secure Payment & Push Systems', 'Offline Data Synchronization']
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Tailored enterprise software and distributed backend microservices engineered to solve complex operational challenges, automate workflows, and handle millions of transactions.',
    iconName: 'Code2',
    deliverables: ['Distributed Microservice Architectures', 'High-Throughput RESTful & GraphQL APIs', 'Role-Based Access & Security Protocols', 'Automated CI/CD Test Pipelines']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Human-centered user experience design, comprehensive design systems, and modern digital interfaces. We combine in-depth user research with intuitive usability and design tokens.',
    iconName: 'Layout',
    deliverables: ['User Journey & Usability Research', 'Figma Interactive Prototypes & Tokens', 'Component Design Systems', 'Accessibility (WCAG 2.1 AA) Compliance']
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Development',
    description: 'Scalable commerce storefronts and custom checkout experiences utilizing headless architectures, Shopify Plus, and bespoke payment gateways for international conversions.',
    iconName: 'ShoppingBag',
    deliverables: ['Headless Storefront Implementations', 'Global Payment & Currency Gateways', 'ERP & Real-Time Inventory Sync', 'Conversion Rate Optimization (CRO)']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Enterprise cloud migration, container orchestration with Kubernetes, and Infrastructure as Code with Terraform across AWS, Azure, and Google Cloud environments.',
    iconName: 'Cloud',
    deliverables: ['Multi-Cloud Infrastructure (AWS & Azure)', 'Kubernetes & Docker Containerization', 'Infrastructure as Code (Terraform)', 'Zero-Downtime Deployment Strategies']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernizing legacy architectures and transitioning outdated systems into agile, cloud-native digital ecosystems that increase organizational efficiency and market agility.',
    iconName: 'RefreshCw',
    deliverables: ['Legacy Monolith Modernization', 'Data Pipeline & Analytics Consolidation', 'Executive Technology Roadmapping', 'Operational Workflow Automation']
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Practical artificial intelligence integration, retrieval-augmented generation (RAG), automated data pipelines, and intelligent process automation tailored to your proprietary data.',
    iconName: 'Cpu',
    deliverables: ['Enterprise Knowledge Bases & RAG', 'Intelligent Document & Data Processing', 'Custom ML Model Deployment', 'Automated Back-Office Workflows']
  }
];
