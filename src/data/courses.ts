/**
 * Catálogo de cursos.
 * Para agregar un curso nuevo, suma un objeto a este arreglo:
 * aparece automáticamente en el mazo del hero, en el catálogo y en la ficha.
 *
 * `theme` define el degradado oficial del Manual de Marca:
 *   - 'ads'   → Energía C Tech      (#edc430 → #ffad32)
 *   - 'data'  → Profundidad          (#295164 → #172c36)
 *   - 'video' → Flujo digital        (#e2edf2 → #59a9d1)
 */
export type Theme = 'ads' | 'data' | 'video';
export type Category = 'publicidad' | 'medicion' | 'contenido';

export interface Course {
  id: string;
  theme: Theme;
  category: Category;
  /** Etiqueta corta en la card: C TECH / PUBLICIDAD */
  label: string;
  /** Especialidad visible en metadatos y ficha */
  specialty: string;
  level: string;
  /** Frase de la portada; usa \n para el salto de línea */
  tagline: string;
  title: string;
  /** Título corto para la card del mazo (opcional) */
  shortTitle?: string;
  teacher: string;
  url: string;
  description: string;
  free: boolean;
  /** Mostrar en el mazo del hero */
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: 'trafficker-digital',
    theme: 'ads',
    category: 'publicidad',
    label: 'Publicidad',
    specialty: 'Publicidad digital',
    level: 'Desde cero',
    tagline: 'De cero\na resultados.',
    title: 'Trafficker Digital Desde 0',
    teacher: 'Isaac Reyes Echavarri',
    url: 'https://citech.netlify.app/programas/trafficker-digital-desde-0',
    description:
      'Aprende a crear, medir y optimizar campañas digitales con un enfoque práctico y aplicable. Ideal si estás empezando y quieres una base sólida en publicidad pagada.',
    free: true,
    featured: true,
  },
  {
    id: 'medicion-meta-ads',
    theme: 'data',
    category: 'medicion',
    label: 'Medición',
    specialty: 'Medición y anuncios',
    level: 'Meta Ads',
    tagline: 'Decisiones\ncon datos.',
    title: 'Medición, Tracking y Meta Ads Aplicado',
    shortTitle: 'Medición, Tracking y Meta Ads',
    teacher: 'David Fernando Manrique Rodríguez',
    url: 'https://citech.netlify.app/programas/medicion-tracking-meta-ads',
    description:
      'Configura la medición de tus campañas y decide con datos, no con suposiciones. Entiende qué medir y qué decisión tomar con cada número.',
    free: true,
    featured: true,
  },
  {
    id: 'videomarketing',
    theme: 'video',
    category: 'contenido',
    label: 'Contenido',
    specialty: 'Creación y edición',
    level: 'Video',
    tagline: 'Ideas que\nconectan.',
    title: 'Creación y Edición de Videomarketing',
    teacher: 'Diana Laura Pérez Moreno',
    url: 'https://citech.netlify.app/programas/creacion-y-edicion-de-videomarketing',
    description:
      'Planea, graba y edita video para marketing con criterio de negocio, no solo de estética. Piezas pensadas para comunicar con claridad.',
    free: true,
    featured: true,
  },
];

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'publicidad', label: 'Publicidad' },
  { id: 'medicion', label: 'Medición' },
  { id: 'contenido', label: 'Contenido' },
];

export const site = {
  name: 'C Tech Consulting',
  short: 'C Tech',
  base: 'https://citech.netlify.app',
  email: 'institutocimx@gmail.com',
  city: 'Guadalajara, Jalisco',
};
