# C Tech — Escuela de marketing (Astro)

Landing de la escuela de C Tech Consulting, con una experiencia inspirada en Netflix: un mazo 3D de cursos que se baraja, filas de cursos, una ficha modal y preguntas frecuentes en barras.
Sin React ni librerías extra: solo Astro, CSS y TypeScript.

## Arrancar

Usamos **pnpm**.

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # genera /dist (sitio estático)
pnpm preview      # sirve /dist
pnpm cf:dev       # build + servidor local de Cloudflare (wrangler dev)
pnpm deploy       # build + deploy manual a Cloudflare
```

Requiere Node 22 o superior (`.node-version`) y pnpm 12 (`packageManager` en `package.json`; con `corepack enable` se usa la versión correcta).

## Deploy en Cloudflare

El sitio es estático y se publica como **Worker con assets estáticos** (`wrangler.jsonc` apunta a `./dist`).

**Con GitHub (recomendado):**

1. Sube el repo a GitHub.
2. En Cloudflare ve a **Workers & Pages → Create → Import a repository** y elige el repo.
3. Configura:
   - Build command: `pnpm build`
   - Deploy command: `pnpm exec wrangler deploy`
   - Root directory: `/`
4. Cada push a `main` despliega solo, y los PR generan una URL de preview.

**Manual:** `pnpm exec wrangler login` y después `pnpm deploy`.

`public/_headers` define caché larga para las fuentes y para `/_astro/*`, más headers de seguridad básicos. `src/pages/404.astro` es la página de error.

## Agregar o editar cursos

Todo sale de **`src/data/courses.ts`**. Agrega un objeto al arreglo `courses` y aparece en:

- el mazo 3D del hero (si `featured: true`; se muestran hasta 3)
- el catálogo, con filtro y búsqueda
- la ficha modal (compacta, con flechas para pasar al curso anterior/siguiente)

`theme` define el degradado oficial del manual: `ads` (Energía), `data` (Profundidad) o `video` (Flujo digital).

## Estructura

```
src/
  data/courses.ts          ← cursos, categorías y datos del sitio
  layouts/Base.astro       ← <head>, fuentes, sprites SVG
  pages/index.astro        ← orden de las secciones
  components/
    Nav.astro              ← menú fijo con subrayado amarillo en la sección activa
    Hero.astro             ← titular + mazo
    CourseDeck.astro       ← mazo 3D (barajeo, arrastre, teclado, inclinación)
    CoursePoster.astro     ← card vertical del mazo
    Catalog.astro          ← fila de cursos con filtros
    CourseCard.astro       ← card horizontal del catálogo
    CourseModal.astro      ← ficha de curso (<dialog> + <template> por curso)
    CourseArt.astro        ← arte por tema con los gráficos auxiliares del manual
    Route, Statement, Enterprise, Official, Faq, Closing, Footer
    Brand, Icon, Sprites   ← logo, íconos (estilo Lucide), símbolos SVG
  scripts/modal.ts         ← openCourse(id), compartido por el mazo y el catálogo
  styles/                  ← CSS por sección (base.css tiene los tokens de marca)
public/fonts/              ← Metropolis 400–800 (woff2)
public/_headers            ← caché y headers para Cloudflare
wrangler.jsonc             ← configuración del Worker
```

## Marca

Basado en el *Manual de Marca C Tech Consulting*:

- Amarillo `#EDC430` solo como acento; azules `#295164` / `#172c36` y neutros oscuros.
- Tipografía: Metropolis.
- Isotipo en su versión sobre negro (C blanca + módulo amarillo), sin recolorear.
- Validez oficial: solo el texto autorizado *"Contamos con validez oficial ante la SEP y el IDEFT"*, sin logos ni folios.
- Voz: de "tú", directa y sin lenguaje de gurú.

## Mazo 3D

`CourseDeck.astro` usa CSS 3D (`perspective` + `preserve-3d`) y la Web Animations API:

- Se baraja solo cada 4.2 s. Se pausa con hover o foco, con la ficha abierta o cuando el mazo sale de pantalla.
- Puedes arrastrar la card del frente, usar las flechas ‹ › o las teclas ← →.
- Respeta `prefers-reduced-motion` y el botón "Reducir movimiento" del footer.

Para ajustar las poses del mazo, edita el arreglo `POS`, y la trayectoria de salida en `OUT`.
