import dayjs from 'dayjs';

export const getStringDate = (date: string | Date, format: string): string => (!date) ? '' : dayjs(date).format(format);
