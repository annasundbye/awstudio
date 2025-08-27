export const PAGE_ORDER = [
  { path: '/', title: 'Hjem' },
  { path: '/tjenester', title: 'Tjenester' },
  { path: '/design', title: 'Design' },
  { path: '/om-meg', title: 'Om meg' }
] as const;

export function getPageIndex(path: string): number {
  return PAGE_ORDER.findIndex(page => page.path === path);
}

export function getNextPage(currentPath: string): string | null {
  const currentIndex = getPageIndex(currentPath);
  if (currentIndex === -1 || currentIndex === PAGE_ORDER.length - 1) return null;
  return PAGE_ORDER[currentIndex + 1].path;
}

export function getPreviousPage(currentPath: string): string | null {
  const currentIndex = getPageIndex(currentPath);
  if (currentIndex <= 0) return null;
  return PAGE_ORDER[currentIndex - 1].path;
}

export function getPageTitle(path: string): string {
  const page = PAGE_ORDER.find(page => page.path === path);
  return page?.title || 'AWStudio';
}