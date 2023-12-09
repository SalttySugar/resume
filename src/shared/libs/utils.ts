import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * TODO: Add the docs
 *
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * TODO: Add the docs
 *
 */
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

