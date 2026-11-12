export interface TechnologyGroup {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    iconComponent: string;
  }[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Frontend',
    description: 'Modern, high-performance UI frameworks delivering accessible, responsive, and reactive web applications.',
    items: [
      { name: 'React.js', description: 'Declarative component-driven interfaces', iconComponent: 'ReactLogo' },
      { name: 'Next.js', description: 'Server-side rendering & App Router', iconComponent: 'NextLogo' },
      { name: 'HTML5', description: 'Semantic, accessible markup standards', iconComponent: 'HtmlLogo' },
      { name: 'CSS3', description: 'Responsive design & modern layouts', iconComponent: 'CssLogo' },
      { name: 'JavaScript', description: 'ESNext interactive web scripting', iconComponent: 'JavaScriptLogo' },
    ]
  },
  {
    category: 'Backend',
    description: 'Resilient server runtimes and enterprise frameworks built for high concurrency and robust data handling.',
    items: [
      { name: 'Node.js', description: 'Event-driven asynchronous backend services', iconComponent: 'NodeLogo' },
      { name: 'Python', description: 'Data processing, APIs, and AI automation', iconComponent: 'PythonLogo' },
      { name: 'Laravel', description: 'Full-featured enterprise PHP web framework', iconComponent: 'LaravelLogo' },
      { name: 'PHP', description: 'Battle-tested server-side web scripting', iconComponent: 'PhpLogo' },
    ]
  },
  {
    category: 'Database',
    description: 'Relational, document, and analytical databases engineered for data integrity and high transaction throughput.',
    items: [
      { name: 'PostgreSQL', description: 'Advanced open-source relational database', iconComponent: 'PostgresLogo' },
      { name: 'MySQL', description: 'High-reliability transactional relational DB', iconComponent: 'MySqlLogo' },
      { name: 'MongoDB', description: 'Document-based flexible NoSQL database', iconComponent: 'MongoLogo' },
    ]
  },
  {
    category: 'Mobile',
    description: 'Cross-platform native mobile frameworks delivering fluid 60FPS experiences for iOS and Android.',
    items: [
      { name: 'Flutter', description: 'Google native multi-platform compilation', iconComponent: 'FlutterLogo' },
      { name: 'React Native', description: 'Native mobile components powered by React', iconComponent: 'ReactNativeLogo' },
    ]
  },
  {
    category: 'Cloud',
    description: 'Secure, elastic cloud hosting and serverless infrastructures engineered for zero downtime.',
    items: [
      { name: 'AWS', description: 'Global cloud infrastructure & services', iconComponent: 'AwsLogo' },
      { name: 'Azure', description: 'Enterprise cloud computing & hybrid solutions', iconComponent: 'AzureLogo' },
      { name: 'Firebase', description: 'Real-time database, auth & cloud functions', iconComponent: 'FirebaseLogo' },
    ]
  }
];
