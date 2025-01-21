import {starLength} from '../const.ts';

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function formatStarRating(rating: number): string {
  return `${Math.round(rating) * starLength}%`;
}
