export const BASE_PATH = '/dr-xamraev-dental-clinic';

export function assetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('./') ? path.slice(2) : path;
  const normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  return `${BASE_PATH}${normalized}`;
}
