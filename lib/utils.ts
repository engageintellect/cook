import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatTagString(tag: string) {
  return tag.replaceAll(" ", "-").toLowerCase()
}

export function sanitizeSlug(slug: string): string {
  const replacements: { [key: string]: string } = {
    nodedotjs: "nodejs",
    nextdotjs: "nextjs",
    // Add more replacements as needed
  };

  return replacements[slug] || slug;
}


export function formatLargeNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'm';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(2).replace(/\.?0+$/, '') + 'k';
  }
  return num.toString();
}


