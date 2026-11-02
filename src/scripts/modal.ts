// Ficha de curso: el contenido de cada curso se renderiza en <template data-course="id">
// dentro de CourseModal.astro y aquí solo se clona en el <dialog>.
let opener: HTMLElement | null = null;

const dialog = () => document.getElementById('course-modal') as HTMLDialogElement | null;

export const isModalOpen = () => !!dialog()?.open;

export function openCourse(id: string) {
  const dlg = dialog();
  const tpl = document.querySelector<HTMLTemplateElement>(`template[data-course="${id}"]`);
  if (!dlg || !tpl) return;
  const body = dlg.querySelector('.m-content')!;
  const active = document.activeElement as HTMLElement | null;
  const stepIndex = active?.classList.contains('m-step') ? [...dlg.querySelectorAll('.m-step')].indexOf(active) : -1;
  body.replaceChildren(tpl.content.cloneNode(true));
  body.classList.remove('swap');
  void (body as HTMLElement).offsetWidth;
  if (dlg.open) body.classList.add('swap');
  // Si se navegó con las flechas, el foco se queda en la misma flecha
  if (stepIndex >= 0) dlg.querySelectorAll<HTMLElement>('.m-step')[stepIndex]?.focus({ preventScroll: true });
  if (!dlg.open) {
    opener = document.activeElement as HTMLElement;
    dlg.showModal();
  }
}

// Cualquier elemento con data-open="id" abre la ficha
document.addEventListener('click', (e) => {
  const t = (e.target as HTMLElement).closest<HTMLElement>('[data-open]');
  if (!t) return;
  e.preventDefault();
  openCourse(t.dataset.open!);
});

const dlg = dialog();
if (dlg) {
  dlg.querySelector('.m-close')?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => opener?.focus());
}
