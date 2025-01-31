import {starLength} from '../const.ts';

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function formatStarRating(rating: number): string {
  return `${Math.round(rating) * starLength}%`;
}

export function containsLetterAndDigit(input: string): boolean {
  const hasDigit = /\d/;
  const hasLetter = /[a-zA-Zа-яА-Я]/;

  return hasDigit.test(input) && hasLetter.test(input);
}
