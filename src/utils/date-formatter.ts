import { format, parseISO } from 'date-fns';

export function parseDate(date?: string) {
  if (date != null) {
    const jsData = parseISO(date);
    return format(jsData, 'dd/MM/yyyy');
  }
  return null;
}

export function parseDateHour(date?: string) {
  if (date != null) {
    const jsData = parseISO(date);
    return format(jsData, "dd/MM/yyyy 'às'  HH:mm");
  }
  return null;
}
