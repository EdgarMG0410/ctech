/**
 * Catálogo de cursos.
 * Para agregar un curso nuevo, suma un objeto a este arreglo: aparece automáticamente
 * en el mazo del hero, en el catálogo, en la ficha y con su propia página en /programas/<id>.
 *
 * `theme` define el degradado oficial del Manual de Marca:
 *   - 'ads'   → Energía C Tech      (#edc430 → #ffad32)
 *   - 'data'  → Profundidad          (#295164 → #172c36)
 *   - 'video' → Flujo digital        (#e2edf2 → #59a9d1)
 */
export type Theme = 'ads' | 'data' | 'video';
export type Category = 'publicidad' | 'medicion' | 'ventas' | 'contenido';

export interface Module {
  title: string;
  /** Lecciones del módulo. `title` es opcional mientras no se publique. */
  lessons: { title?: string; minutes: number }[];
}

export interface Course {
  /** También es el slug de la página: /programas/<id> */
  id: string;
  theme: Theme;
  category: Category;
  /** Etiqueta corta en la card: C TECH / PUBLICIDAD */
  label: string;
  /** Especialidad visible en metadatos y ficha */
  specialty: string;
  /** Etiqueta destacada en cards (herramienta o enfoque) */
  tag: string;
  /** Nivel académico: Básico, Intermedio, Avanzado */
  level: string;
  /** Frase de la portada; usa \n para el salto de línea */
  tagline: string;
  title: string;
  /** Título corto para la card del mazo (opcional) */
  shortTitle?: string;
  teacher: string;
  teacherBio: string;
  description: string;
  /** Link de YouTube del video de venta (VSL) */
  vsl: string;
  /** Lo que el alumno va a aplicar (opcional) */
  outcomes?: string[];
  /** Temario; si está vacío se muestra "se publicará pronto" */
  modules?: Module[];
  /** Precio en MXN; 0 = gratis */
  price: number;
  publishedAt: string; // AAAA-MM-DD
  /** Mostrar en el mazo del hero */
  featured?: boolean;
}

export const site = {
  name: 'C Tech Consulting',
  short: 'C Tech',
  base: 'https://citech.netlify.app',
  email: 'institutocimx@gmail.com',
  city: 'Guadalajara, Jalisco',
};

export const courses: Course[] = [
  {
    id: 'trafficker-digital-desde-0',
    theme: 'ads',
    category: 'publicidad',
    label: 'Publicidad',
    specialty: 'Publicidad digital',
    tag: 'Desde cero',
    level: 'Básico',
    tagline: 'De cero\na resultados.',
    title: 'Trafficker Digital Desde 0',
    teacher: 'Isaac Reyes Echavarri',
    teacherBio: 'Fundador de C Tech y Ads Partner; estratega comercial en marketing digital.',
    description:
      'Aprende a gestionar campañas en Meta, Google y TikTok Ads desde cero: estructura, segmentación y optimización de anuncios.',
    vsl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // TODO: video temporal
    outcomes: [
      'Estructurar campañas en Meta, Google y TikTok Ads',
      'Definir la segmentación de tus anuncios',
      'Optimizar campañas a partir de sus resultados',
    ],
    modules: [],
    price: 0,
    publishedAt: '2026-09-26',
    featured: true,
  },
  {
    id: 'marketing-digital-inmobiliario',
    theme: 'video',
    category: 'publicidad',
    label: 'Inmobiliario',
    specialty: 'Marketing inmobiliario',
    tag: 'Meta Ads e IA',
    level: 'Básico',
    tagline: 'Vende sin\nportales.',
    title: 'Marketing Digital Inmobiliario',
    teacher: 'Carlos Guillermo González García',
    teacherBio: '10 años en venta de inmuebles de alto valor; dueño de Elvian High Performance Marketing.',
    description:
      'El sistema completo para que un asesor inmobiliario venda propiedades con Meta Ads, IA y WhatsApp, sin depender de portales como Inmuebles24.',
    vsl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // TODO: video temporal
    modules: [{ title: 'Inicio', lessons: [] }],
    price: 0,
    publishedAt: '2026-09-26',
  },
  {
    id: 'medicion-tracking-meta-ads',
    theme: 'data',
    category: 'medicion',
    label: 'Medición',
    specialty: 'Medición y anuncios',
    tag: 'Meta Ads',
    level: 'Intermedio',
    tagline: 'Decisiones\ncon datos.',
    title: 'Medición, Tracking y Meta Ads Aplicado',
    shortTitle: 'Medición, Tracking y Meta Ads',
    teacher: 'David Fernando Manrique Rodríguez',
    teacherBio: '7 años en una agencia de publicidad. Dueño de 20ydos, especializada en e-commerce y medición web.',
    description:
      'Medición mínima viable, UTMs, Pixel de Meta y API de Conversiones para verificar que cada campaña mida bien antes de invertir.',
    vsl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // TODO: video temporal
    outcomes: [
      'Implementar una medición mínima viable',
      'Etiquetar tus campañas con UTMs',
      'Configurar el Pixel de Meta',
      'Conectar la API de Conversiones',
    ],
    modules: [
      { title: 'Módulo 1: Inicial', lessons: [{ minutes: 10 }, { minutes: 10 }, { minutes: 10 }] },
      { title: 'Módulo 2: Secundario', lessons: [{ minutes: 10 }, { minutes: 10 }, { minutes: 10 }, { minutes: 10 }, { minutes: 10 }] },
    ],
    price: 1200,
    publishedAt: '2026-09-26',
    featured: true,
  },
  {
    id: 'arquitectura-de-ventas',
    theme: 'ads',
    category: 'ventas',
    label: 'Ventas',
    specialty: 'Ventas y estrategia comercial',
    tag: 'Ventas',
    level: 'Intermedio',
    tagline: 'Ventas con\nestructura.',
    title: 'Arquitectura de Ventas',
    teacher: 'Sergio Alberto Hernández San Martín',
    teacherBio: '15 años en ventas y estrategia comercial; dueño de agencia RifateHoy.',
    description: 'Arquitectura de Ventas, programa de C Tech Consulting.', // TODO: descripción real
    vsl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // TODO: video temporal
    modules: [
      { title: 'Módulo 1', lessons: [] },
      { title: 'Módulo 2', lessons: [] },
    ],
    price: 0,
    publishedAt: '2026-09-26',
  },
  {
    id: 'creacion-y-edicion-de-videomarketing',
    theme: 'video',
    category: 'contenido',
    label: 'Contenido',
    specialty: 'Creación y edición',
    tag: 'Video',
    level: 'Básico',
    tagline: 'Ideas que\nconectan.',
    title: 'Creación y Edición de Videomarketing',
    teacher: 'Diana Laura Pérez Moreno',
    teacherBio: '5 años en creación de contenido; dueña de la agencia Emprende 180.',
    description:
      'Planea, graba y edita video para marketing con criterio de negocio, no solo de estética. Piezas pensadas para comunicar con claridad.',
    vsl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // TODO: video temporal
    modules: [],
    price: 0,
    publishedAt: '2026-09-26',
    featured: true,
  },
];

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'publicidad', label: 'Publicidad' },
  { id: 'medicion', label: 'Medición' },
  { id: 'ventas', label: 'Ventas' },
  { id: 'contenido', label: 'Contenido' },
];

/* ---------- Helpers ---------- */
export const courseUrl = (c: Course) => `/programas/${c.id}`;
export const buyUrl = (c: Course) => `${site.base}/registro?compra=${c.id}`;
export const isFree = (c: Course) => c.price === 0;
export const priceLabel = (c: Course) =>
  isFree(c) ? 'Gratis' : `$${c.price.toLocaleString('es-MX')}`;
export const ctaLabel = (c: Course) =>
  isFree(c) ? 'Empezar sin costo' : `Comprar por ${priceLabel(c)}`;

/** Acepta links youtube.com/watch?v=, youtu.be/, /embed/ y /shorts/ */
export const vslEmbedUrl = (c: Course) => {
  const id = c.vsl.match(/(?:[?&]v=|youtu\.be\/|\/embed\/|\/shorts\/)([\w-]{11})/)?.[1];
  if (!id) throw new Error(`El curso "${c.id}" no tiene un link de YouTube válido: ${c.vsl}`);
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
};

export const stats = (c: Course) => {
  const modules = c.modules ?? [];
  const lessons = modules.reduce((n, m) => n + m.lessons.length, 0);
  const minutes = modules.reduce((n, m) => n + m.lessons.reduce((s, l) => s + l.minutes, 0), 0);
  return { modules: modules.length, lessons, minutes };
};

export const lessonsLabel = (n: number) => `${n} ${n === 1 ? 'lección' : 'lecciones'}`;
export const modulesLabel = (n: number) => `${n} ${n === 1 ? 'módulo' : 'módulos'}`;

export const formatMinutes = (min: number) => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`;
};

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso));
