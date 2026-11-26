// Screenshots: add files to public/images/projects/ and set `image`.
// Until then an illustration is shown, clearly marked as a placeholder.
// Leave `live` / `github` empty until you have a real URL.
export const projects = [
  {
    id: 'restro',
    name: 'Restro',
    category: 'Restaurant website',
    description:
      'A modern restaurant website focused on responsive presentation, attractive food imagery, and an engaging browsing experience.',
    features: [
      'Responsive restaurant homepage',
      'Modern hero section',
      'Food and service presentation',
      'Reusable React components',
      'Smooth animations',
      'Responsive navigation',
    ],
    tech: ['React.js', 'JavaScript', 'Vite', 'Tailwind CSS', 'Motion', 'Lucide React'],
    contribution: '',
    image: '',
    layout: 'restaurant',
    live: '',
    github: '',
  },
  {
    id: 'fixitnow',
    name: 'FixItNow',
    category: 'Home service platform',
    description:
      'A service-booking platform built as a practical full-stack learning project, connecting customers with service providers.',
    // Keep only the features that are finished in your repository.
    features: [
      'Role-based user architecture',
      'Authentication',
      'Service request management',
      'REST API',
      'Database integration',
      'Modular backend structure',
    ],
    tech: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT'],
    contribution: '',
    image: '',
    layout: 'dashboard',
    live: '',
    github: '',
  },
  {
    id: 'lumiva',
    name: 'Lumiva',
    category: 'E-commerce store',
    description:
      'A beauty and skincare shopping concept designed around product browsing and a clean, enjoyable interface.',
    features: [
      'Modern shopping interface',
      'Product presentation',
      'Category browsing',
      'Responsive product layouts',
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
    contribution: '',
    image: '',
    layout: 'store',
    live: '',
    github: '',
  },
];
