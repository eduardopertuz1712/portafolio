export type Locale = 'es' | 'en';
export type Localized = Record<Locale, string>;
export const bilingual = (es: string, en: string): Localized => ({ es, en });

export const profile = {
  name: 'Eduardo Isaac Pertuz Villegas',
  shortName: 'Eduardo Pertuz',
  email: 'pertuzvillegaseduardoisaac@gmail.com',
  github: 'https://github.com/eduardopertuz1712',
  linkedin: 'https://www.linkedin.com/in/edupertuz1712/',
  english: bilingual('En formación', 'Learning'),
  siteUrl: 'https://portafolio-sand-beta-56.vercel.app',
  location: bilingual('Barranquilla, Colombia', 'Barranquilla, Colombia'),
};

export function localizedPath(locale: Locale, path = '/') {
  return `${locale === 'en' ? '/en' : ''}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`;
}

export const navigation = [
  { id: 'about', label: bilingual('Sobre mí', 'About') },
  { id: 'projects', label: bilingual('Proyectos', 'Projects') },
  { id: 'experience', label: bilingual('Experiencia', 'Experience') },
  { id: 'stack', label: bilingual('Stack', 'Stack') },
  { id: 'education', label: bilingual('Formación', 'Education') },
  { id: 'contact', label: bilingual('Contacto', 'Contact') },
];

export const copy = {
  hero: bilingual(
    'Desarrollador de software enfocado en crear aplicaciones web, APIs y soluciones que conectan frontend y backend para resolver problemas reales.',
    'Software developer focused on building web applications, APIs, and solutions that connect frontend and backend to solve real-world problems.',
  ),
  viewProjects: bilingual('Ver proyectos', 'View projects'),
  viewResume: bilingual('Ver CV', 'View resume'),
  resume: bilingual('CV', 'Resume'),
  aboutTitle: bilingual('Código con propósito.\nProblemas que resolver.', 'Code with purpose.\nProblems to solve.'),
  about: [
    bilingual('Soy desarrollador de software con formación en desarrollo web y experiencia práctica construyendo proyectos frontend y backend. Me interesa crear aplicaciones modernas, funcionales y mantenibles.', 'I am a software developer with web development training and practical experience building frontend and backend projects. I enjoy creating modern, functional, and maintainable applications.'),
    bilingual('Trabajo principalmente con Python, Flask, JavaScript, React y Next.js, además de bases de datos SQL y NoSQL. También tengo experiencia creando APIs REST e integrando frontend y backend.', 'I mainly work with Python, Flask, JavaScript, React, and Next.js, along with SQL and NoSQL databases. I also have experience building REST APIs and integrating frontend and backend systems.'),
  ],
  projectsTitle: bilingual('Ideas que se convierten\nen software.', 'Ideas, turned\ninto software.'),
  projectsLead: bilingual('Una selección de proyectos académicos y personales, las decisiones detrás de ellos y los problemas que buscan resolver.', 'A selection of academic and personal projects, the decisions behind them, and the problems they aim to solve.'),
  caseStudy: bilingual('Explorar proyecto', 'Explore project'),
  allProjects: bilingual('Todos los proyectos', 'All projects'),
  moreProjects: bilingual('Más proyectos.', 'More projects.'),
  experienceTitle: bilingual('Formación y experiencia práctica.', 'Training and practical experience.'),
  stackTitle: bilingual('Tecnologías para construir\nla solución.', 'Technologies used to\nbuild the solution.'),
  educationTitle: bilingual('Formación continua.\nAprendizaje práctico.', 'Continuous learning.\nPractical experience.'),
  contactTitle: bilingual('¿Construimos algo?', "Let's build something."),
  contact: bilingual('Estoy abierto a oportunidades de desarrollo de software y a colaborar en proyectos interesantes. Puedes encontrarme en GitHub y LinkedIn.', 'I am open to software development opportunities and interesting project collaborations. You can find me on GitHub and LinkedIn.'),
  skip: bilingual('Saltar al contenido', 'Skip to content'),
};

export const experience = [
  {
    role: bilingual('Desarrollador de Software Junior', 'Junior Software Developer'),
    organization: 'Formación y proyectos prácticos',
    type: bilingual('Desarrollo web · Frontend & Backend', 'Web development · Frontend & Backend'),
    period: bilingual('2025 — Actualidad', '2025 — Present'),
    featured: true,
    points: [
      bilingual('Desarrollo de aplicaciones web y APIs utilizando Python, Flask, JavaScript, React y Next.js.', 'Building web applications and APIs using Python, Flask, JavaScript, React, and Next.js.'),
      bilingual('Integración de frontend y backend, consumo de APIs REST y trabajo con bases de datos SQL y NoSQL.', 'Integrating frontend and backend, consuming REST APIs, and working with SQL and NoSQL databases.'),
      bilingual('Uso de Git y GitHub para control de versiones y despliegue de proyectos web.', 'Using Git and GitHub for version control and web project deployment.'),
    ],
    stack: ['Python', 'Flask', 'React', 'Next.js', 'Git/GitHub'],
  },
  {
    role: bilingual('Desarrollo de proyectos colaborativos', 'Collaborative Project Development'),
    organization: 'Riwi',
    type: bilingual('Formación en desarrollo de software', 'Software development training'),
    period: bilingual('2025 — 2026', '2025 — 2026'),
    featured: false,
    points: [
      bilingual('Participación en proyectos como Catalyst, Kiosko y E-commerce.', 'Participated in projects such as Catalyst, Kiosko, and E-commerce.'),
      bilingual('Trabajo colaborativo aplicando buenas prácticas de desarrollo y control de versiones.', 'Collaborative work applying development best practices and version control.'),
    ],
    stack: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
  },
];

export const techGroups = [
  { title: bilingual('Backend', 'Backend'), code: '01', primary: true, tools: ['Python', 'Flask', 'Jinja', 'REST APIs'] },
  { title: bilingual('Frontend', 'Frontend'), code: '02', tools: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: bilingual('Bases de datos', 'Databases'), code: '03', tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'] },
  { title: bilingual('Herramientas', 'Tools'), code: '04', tools: ['Git', 'GitHub', 'Linux', 'windows' , 'VS Code'] },
];

export const courses = [
  { title: 'Desarrollo de Software · Frontend Junior', author: 'Riwi', year: '2025 — 2026', hours: 'Formación', credential: null as string | null },
  { title: 'Análisis y Desarrollo de Software', author: 'SENA', year: 'En formación', hours: 'ADSO', credential: null as string | null },
];
