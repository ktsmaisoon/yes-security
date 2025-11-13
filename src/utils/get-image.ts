/**
 * Utility function to get the correct image path with base path for GitHub Pages
 */
export function getImage(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  // Ensure path starts with forward slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export default getImage;