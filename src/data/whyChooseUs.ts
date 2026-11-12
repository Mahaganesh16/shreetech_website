export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 'experienced-team',
    title: 'Experienced Development Team',
    description: 'Our core team consists of senior engineers and product designers with extensive enterprise backgrounds. We write clean, maintainable code built for long-term viability.',
    iconName: 'Users',
    metric: 'Senior-Level Engineers'
  },
  {
    id: 'modern-stack',
    title: 'Modern Technology Stack',
    description: 'We develop using battle-tested modern frameworks—Next.js, React, TypeScript, Flutter, Python, and AWS—avoiding deprecated legacy patterns while guaranteeing speed and reliability.',
    iconName: 'Layers',
    metric: 'Production-Proven Tech'
  },
  {
    id: 'quality-focused',
    title: 'Quality-Focused Development',
    description: 'Every release is subjected to automated regression suites, static type checking, peer code reviews, and strict security compliance checks before reaching production.',
    iconName: 'CheckCircle2',
    metric: '99.4% First-Pass QA'
  },
  {
    id: 'scalable-architecture',
    title: 'Scalable Architecture',
    description: 'We build distributed, cloud-native systems designed to gracefully support rapid business growth, from initial launch to millions of monthly active users.',
    iconName: 'TrendingUp',
    metric: 'Elastic High-Scale'
  },
  {
    id: 'reliable-support',
    title: 'Reliable Support',
    description: 'Our engagement continues well beyond launch with structured SLAs, 24/7 cloud infrastructure monitoring, regular security updates, and performance tuning.',
    iconName: 'ShieldCheck',
    metric: 'Guaranteed SLA Uptime'
  },
  {
    id: 'client-centered',
    title: 'Client-Centered Solutions',
    description: 'We tailor our development workflows to your internal roadmap. Transparent communication, direct engineer access, and regular sprint reviews keep you in full control.',
    iconName: 'HeartHandshake',
    metric: '98% Client Satisfaction'
  }
];
