import { bilingual as b, type Localized } from './site';

export type ProjectSection = {
  id: string;
  title: Localized;
  text: Localized;
  points?: Localized[];
};
export type Project = {
  slug: string;
  name: string;
  subtitle: Localized;
  category: Localized;
  status: Localized;
  description: Localized;
  featured: boolean;
  kind: 'eduardo' | 'residencias' | 'sifcao' | 'pos' | 'barberia' | 'happypet' | 'peliculas' | 'unity';
  stack: string[];
  github?: string;
  context: Localized;
  role: Localized;
  highlights: { value: string; label: Localized }[];
  sections: ProjectSection[];
  images?: { src: string; width: number; height: number; alt: Localized; caption: Localized }[];
};

const repo = 'https://github.com/eduardopertuz1712/';

export const projects: Project[] = [
  {
    slug: 'mevb', name: 'MEVB', kind: 'eduardo', featured: true,
    subtitle: b('Menú Easy Virtual Booking.', 'Menú Easy Virtual Booking.'),
    category: b('Proyecto académico · Web', 'Academic project · Web'),
    status: b('Proyecto académico', 'Academic project'),
    description: b('Sistema de pedidos virtuales para organizar las compras del kiosco escolar, reducir filas y permitir que los estudiantes realicen sus pedidos con anticipación.', 'A virtual ordering system designed to organize school kiosk purchases, reduce queues, and let students place orders in advance.'),
    context: b('Proyecto académico · IDETP', 'Academic project · IDETP'),
    role: b('Desarrollo de software · Frontend & Backend', 'Software development · Frontend & Backend'),
    stack: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    github: repo + 'MEVB',
    highlights: [{ value: 'QR', label: b('recogida de pedidos', 'order pickup') }, { value: 'Web', label: b('pedidos anticipados', 'advance orders') }, { value: 'UX', label: b('menos filas', 'fewer queues') }],
    sections: [
      { id: 'overview', title: b('El proyecto', 'Overview'), text: b('MEVB (Menú Easy Virtual Booking) nació como propuesta para solucionar las largas filas y el desorden durante los descansos escolares. La idea permite consultar el menú y realizar pedidos desde el celular antes de ir al kiosco.', 'MEVB (Menú Easy Virtual Booking) was created to address long queues and disorder during school breaks. It lets students view the menu and place orders from their phones before going to the kiosk.') },
      { id: 'problem', title: b('El problema', 'The problem'), text: b('El kiosco concentraba muchos pedidos en pocos minutos, generando filas, pérdida de tiempo y poca organización. Además, los pedidos se realizaban principalmente de forma presencial.', 'The kiosk received many orders within a short period, creating queues, lost time, and poor organization. Orders were also mainly placed in person.') },
      { id: 'solution', title: b('La solución', 'The solution'), text: b('El sistema permite seleccionar productos, registrar el pedido y generar un código para facilitar la recogida. El objetivo es separar el momento de pedir del momento de recoger.', 'The system lets users select products, place an order, and receive a code to simplify pickup. The goal is to separate ordering from pickup.') },
      { id: 'contribution', title: b('Mi participación', 'My contribution'), text: b('Participé en el desarrollo del software y en la integración de las funcionalidades necesarias para el flujo de pedidos.', 'I contributed to the software development and integration of the functionality required for the ordering workflow.') },
    ],
  },
  {
    slug: 'vetconnect', name: 'VetConnect', kind: 'eduardo', featured: true,
    subtitle: b('Ayuda veterinaria cuando más la necesitas.', 'Find veterinary help when you need it most.'),
    category: b('Proyecto personal · Next.js', 'Personal project · Next.js'),
    status: b('En desarrollo', 'In development'),
    description: b('Plataforma web para facilitar el acceso a clínicas veterinarias, veterinarios y servicios relacionados con animales en Barranquilla.', 'A web platform designed to make it easier to find veterinary clinics, veterinarians, and animal-related services in Barranquilla.'),
    context: b('Proyecto personal', 'Personal project'),
    role: b('Frontend · Arquitectura de interfaz', 'Frontend · Interface architecture'),
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    github: repo + 'VetConnect',
    highlights: [{ value: 'Next.js', label: b('aplicación web', 'web application') }, { value: 'UI', label: b('responsive', 'responsive') }, { value: 'UX', label: b('acceso rápido', 'quick access') }],
    sections: [
      { id: 'overview', title: b('El proyecto', 'Overview'), text: b('VetConnect busca centralizar información útil para personas que necesitan encontrar ayuda veterinaria. La interfaz está pensada para facilitar la navegación desde dispositivos móviles y escritorio.', 'VetConnect aims to centralize useful information for people looking for veterinary help. The interface is designed for easy navigation on mobile and desktop.') },
      { id: 'architecture', title: b('Arquitectura', 'Architecture'), text: b('El proyecto está construido con Next.js y React, utilizando componentes reutilizables, Tailwind CSS y TypeScript para mantener una estructura organizada.', 'The project is built with Next.js and React, using reusable components, Tailwind CSS, and TypeScript for an organized structure.') },
      { id: 'interface', title: b('Interfaz', 'Interface'), text: b('Cuenta con navegación lateral, páginas para clínicas y servicios, diseño responsive y componentes enfocados en una experiencia sencilla.', 'It includes sidebar navigation, clinic and service pages, responsive design, and components focused on a simple user experience.') },
    ],
  },
  {
    slug: 'transcriptor', name: 'Sistema de Transcripción', kind: 'eduardo', featured: true,
    subtitle: b('Audio convertido en texto automáticamente.', 'Audio converted to text automatically.'),
    category: b('Proyecto personal · Python', 'Personal project · Python'),
    status: b('Funcional', 'Functional'),
    description: b('Sistema local para transcribir archivos de audio utilizando Python, Flask y Whisper, con una interfaz web para cargar audios y consultar las transcripciones.', 'A local system that transcribes audio files using Python, Flask, and Whisper, with a web interface for uploading audio and viewing transcriptions.'),
    context: b('Proyecto personal de automatización', 'Personal automation project'),
    role: b('Desarrollo Full Stack', 'Full Stack development'),
    stack: ['Python', 'Flask', 'Whisper', 'HTML', 'CSS', 'JavaScript', 'FFmpeg'],
    github: repo + 'bot_transcriptor',
    highlights: [{ value: 'AI', label: b('transcripción', 'transcription') }, { value: 'Flask', label: b('API local', 'local API') }, { value: 'Audio', label: b('MP3 · WAV · M4A', 'MP3 · WAV · M4A') }],
    sections: [
      { id: 'overview', title: b('El proyecto', 'Overview'), text: b('El sistema procesa archivos de audio y genera automáticamente archivos de texto con su contenido transcrito.', 'The system processes audio files and automatically generates text files containing the transcription.') },
      { id: 'workflow', title: b('Flujo de trabajo', 'Workflow'), text: b('El usuario carga un audio desde la interfaz web. Flask recibe la solicitud y Python utiliza Whisper para procesar el audio. Finalmente se guarda la transcripción asociada al archivo original.', 'The user uploads audio through the web interface. Flask receives the request and Python uses Whisper to process the audio. The resulting transcription is saved using the original file name.') },
      { id: 'stack', title: b('Tecnologías', 'Technologies'), text: b('Python y Flask forman el backend, Whisper realiza la transcripción y FFmpeg permite trabajar con los formatos de audio necesarios.', 'Python and Flask provide the backend, Whisper handles transcription, and FFmpeg supports the required audio formats.') },
    ],
  },
  {
    slug: 'ecommerce', name: 'E-commerce', kind: 'eduardo', featured: true,
    subtitle: b('Tienda web con flujo de productos y usuarios.', 'A web store with product and user flows.'),
    category: b('Proyecto académico · Web', 'Academic project · Web'),
    status: b('Proyecto académico', 'Academic project'),
    description: b('Aplicación de comercio electrónico desarrollada durante la formación, con autenticación, validación de correo, gestión de productos y operaciones CRUD.', 'An e-commerce application developed during training, featuring authentication, email validation, product management, and CRUD operations.'),
    context: b('Formación en desarrollo de software · Riwi', 'Software development training · Riwi'),
    role: b('Desarrollo frontend y lógica de aplicación', 'Frontend development and application logic'),
    stack: ['JavaScript', 'HTML', 'CSS', 'JSON Server', 'Git'],
    github: repo + 'E-commerce',
    highlights: [{ value: 'CRUD', label: b('productos', 'products') }, { value: 'Auth', label: b('usuarios', 'users') }, { value: 'JS', label: b('lógica web', 'web logic') }],
    sections: [
      { id: 'overview', title: b('El proyecto', 'Overview'), text: b('Proyecto de práctica enfocado en construir una tienda web y trabajar conceptos de autenticación, validación y manejo de información de productos.', 'A practice project focused on building a web store while working with authentication, validation, and product data management.') },
      { id: 'features', title: b('Funcionalidades', 'Features'), text: b('Incluye inicio de sesión, validación de correo, listado de productos y operaciones para actualizar y eliminar productos.', 'It includes login, email validation, product listing, and operations to update and delete products.') },
      { id: 'learning', title: b('Aprendizajes', 'Learning'), text: b('El proyecto permitió practicar JavaScript, manipulación del DOM, consumo de datos y organización de funcionalidades en una aplicación web.', 'The project provided practice with JavaScript, DOM manipulation, data handling, and organizing features in a web application.') },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter(p => p.featured);
export const secondaryProjects = projects.filter(p => !p.featured);
