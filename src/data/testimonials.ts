export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  imageUrl: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    designation: 'Chief Technology Officer',
    company: 'Apex Financial Technologies',
    content: 'Shree Tech delivered our institutional trading dashboard on time and under budget. Their senior engineers demonstrated exceptional mastery over Next.js and real-time WebSocket pipelines. The code quality and documentation made internal handover seamless.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'David Thorne',
    designation: 'VP of Product Engineering',
    company: 'CareSync Health Systems',
    content: 'Finding an engineering partner that genuinely understands both modern UI/UX design and strict HIPAA compliance is rare. Shree Tech bridged that gap effortlessly. They operate with the rigor and transparency of an in-house senior team.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Rostova',
    designation: 'Head of Digital Products',
    company: 'Veloce Logistics Group',
    content: 'Our mobile dispatch app had complex offline data sync and hardware constraints. Shree Tech engineered a Flutter solution that performed flawlessly across 4,500 active drivers within the first month. We consider them a long-term strategic technology partner.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80',
    rating: 5
  },
  {
    id: '4',
    name: 'Michael Chen',
    designation: 'Managing Director',
    company: 'Nordic Cloud Hosting',
    content: 'Their architectural foresight saved us months of rework. By implementing clean Kubernetes containerization and Infrastructure as Code from day one, our multi-cloud deployment operates with 99.999% reliability. Highly recommended.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    rating: 5
  }
];
