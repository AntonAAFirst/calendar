import { getLivedYears } from "..";

export function createYear(yearNumber: number) {
  return {
    number: yearNumber,
    seasons: [
      [
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
      ],
      [
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
      ],
      [
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
      ],
      [
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
      ],
    ],
  };
}

export function getTenYears(start: number, end: number) {
  let years = [];

  for (let i = start; i <= end; i++) {
    years.push(i);
  }

  return years;
}

interface DecadeBlock {
  age: string;
  numbers: number[];
}

export const decadeRows: DecadeBlock[] = [
  { age: "0-9", numbers: getTenYears(0, 9) },
  { age: "10-19", numbers: getTenYears(10, 19) },
  { age: "20-29", numbers: getTenYears(20, 29) },
  { age: "30-39", numbers: getTenYears(30, 39) },
  { age: "40-49", numbers: getTenYears(40, 49) },
  { age: "50-59", numbers: getTenYears(50, 59) },
  { age: "60-69", numbers: getTenYears(60, 69) },
];

export function isPastDays(month: number, week: number, year: number) {
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  if (year > getLivedYears()) {
    return false;
  }

  if (year < getLivedYears()) {
    return true;
  } else if (month < currentMonth) {
    return true;
  } else if (month === currentMonth) {
    if (currentDay >= 21 && week !== 3) {
      return true;
    } else if (currentDay >= 14 && week <= 1) {
      return true;
    } else if (currentDay >= 7 && week < 1) {
      return true;
    }
  }

  return false;
}
