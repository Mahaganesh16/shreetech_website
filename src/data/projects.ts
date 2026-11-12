export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'enterprise' | 'cloud';
  categoryLabel: string;
  client: string;
  year: string;
  summary: string;
  technologies: string[];
  imageUrl: string;
  layoutSpan: 'featured' | 'standard' | 'tall'; // for editorial grid variation
  metrics: { label: string; value: string };
}

export const projectsData: Project[] = [
  {
    id: 'apex-finance',
    title: 'Apex Institutional FinTech Portal',
    category: 'web',
    categoryLabel: 'Web Application',
    client: 'Apex Financial Markets',
    year: '2025',
    summary: 'A unified high-speed institutional trading and risk-management terminal with sub-second WebSocket telemetry, multi-currency routing, and automated compliance verification.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    layoutSpan: 'featured', // spans 2 columns
    metrics: { label: 'Daily Trading Volume', value: '$45M+' }
  },
  {
    id: 'health-cloud',
    title: 'CareSync Telemedicine & EHR Suite',
    category: 'enterprise',
    categoryLabel: 'Enterprise SaaS',
    client: 'CareSync Health Network',
    year: '2025',
    summary: 'HIPAA-compliant patient record exchange and secure video consultation infrastructure linking 12,000 clinicians across regional hospitals.',
    technologies: ['React', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    layoutSpan: 'standard',
    metrics: { label: 'Patients Managed', value: '350,000+' }
  },
  {
    id: 'fleet-mobile',
    title: 'Veloce Logistics Driver & Dispatch App',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    client: 'Veloce Freight Systems',
    year: '2024',
    summary: 'Cross-platform mobile application providing real-time GPS telemetry, offline route caching, proof-of-delivery signatures, and automated dispatch rebalancing.',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'REST APIs'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    layoutSpan: 'standard',
    metrics: { label: 'Route Efficiency Gain', value: '+34%' }
  },
  {
    id: 'luxury-commerce',
    title: 'Aura Luxury Headless Storefront',
    category: 'web',
    categoryLabel: 'E-Commerce',
    client: 'Maison Aura Paris',
    year: '2025',
    summary: 'International multi-currency headless e-commerce experience with sub-second page loads, global CDN edge caching, and localized checkout in 32 markets.',
    technologies: ['Next.js', 'Shopify Plus API', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    layoutSpan: 'standard',
    metrics: { label: 'Conversion Lift', value: '+42%' }
  },
  {
    id: 'cloud-security',
    title: 'Zero-Trust Cloud Governance Platform',
    category: 'cloud',
    categoryLabel: 'Cloud Infrastructure',
    client: 'Nordic Hosting AB',
    year: '2024',
    summary: 'Multi-cloud monitoring dashboard consolidating AWS and Azure cluster telemetry with proactive intrusion mitigation and audit trail compliance.',
    technologies: ['React', 'Go', 'Kubernetes', 'AWS', 'Azure'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    layoutSpan: 'featured',
    metrics: { label: 'Infrastructure Uptime', value: '99.999%' }
  }
];
