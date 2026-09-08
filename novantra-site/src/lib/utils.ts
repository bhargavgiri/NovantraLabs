import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function easeOutQuad(t: number): number {
  return 1 - (1 - t) * (1 - t)
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}
