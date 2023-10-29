import subDays from "date-fns/subDays";

// dates from the first sunday that was at least a year ago until today
export function buildCalendarDates(): Date[] {
  let dates = [];

  let pointer = new Date();
  let i = 0;

  while (i <= 365 || pointer.getDay() !== 0) {
    pointer = subDays(pointer, 1);
    dates.push(pointer);
    i++;
  }

  return dates.reverse();
}
