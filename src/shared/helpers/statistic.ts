import { DateTime } from "luxon";

export function getPastMonthSinceYearStart() {
  const countMonth = getPastDaysSinceTime(0, 0) / 30;

  const formattedString = countMonth.toString().slice(0, 4);

  return formattedString;
}

export function getPastWeeksSinceTime(month: number, day: number) {
  return DateTime.local(2023, month, day).weekNumber;
}

export function getPastDaysSinceTime(month: number, day: number) {
  const startDate = new Date(2023, month, day).getTime();

  const currentTime = Date.now();

  const totalDays = Math.ceil((currentTime - startDate) / (1000 * 3600 * 24));

  return totalDays;
}

export function getDaysPercentOfYear(countPastDays: number) {
  const firstPart = (countPastDays / 365).toString().slice(2, 4);

  const secondPart = (countPastDays / 365).toString().slice(4, 6);

  return firstPart + "." + secondPart;
}
