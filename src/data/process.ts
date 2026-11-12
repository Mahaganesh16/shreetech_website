export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description: 'We work closely with your stakeholders to define business objectives, user requirements, technical constraints, and clear KPIs for project success.',
    deliverables: ['Scope & Objective Definition', 'Stakeholder Interviews', 'Technical Feasibility Study']
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description: 'Our senior architects construct an engineering roadmap, database schemas, system architecture blueprints, and milestone sprint schedules.',
    deliverables: ['System Architecture Blueprint', 'Tech Stack Selection', 'Sprint Delivery Milestones']
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description: 'We craft human-centric user journeys, wireframes, accessible design systems, and high-fidelity interactive prototypes tested with real users.',
    deliverables: ['User Flow & Wireframing', 'Figma Interactive Prototypes', 'Design System & Tokens']
  },
  {
    number: '04',
    title: 'Development',
    description: 'Our development team writes clean, type-safe, modular code following Domain-Driven Design principles, automated CI/CD pipelines, and regular demo checkpoints.',
    deliverables: ['Agile Two-Week Sprints', 'Test-Driven Codebase', 'Weekly Staging Deployments']
  },
  {
    number: '05',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous automated unit testing, end-to-end integration tests, load stress testing, cross-browser compatibility checks, and security vulnerability scans.',
    deliverables: ['Automated End-to-End Tests', 'Load & Stress Benchmarks', 'Security & Penetration Audit']
  },
  {
    number: '06',
    title: 'Deployment & Support',
    description: 'Zero-downtime production deployment, cloud monitoring configuration, staff handover documentation, and ongoing SLA maintenance agreements.',
    deliverables: ['Zero-Downtime Rollout', 'Cloud Telemetry & Logging', 'Dedicated SLA Maintenance']
  }
];
