import dayjs from 'dayjs';

export const getStringDate = (date: string | Date, format: string): string => (!date) ? '' : dayjs(date).format(format);

export const compareStringDates = (firstDate: string, secondDate: string): number => (dayjs(secondDate).diff(firstDate, 'second'));
