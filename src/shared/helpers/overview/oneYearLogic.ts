import { getLivedYears } from "..";

export function countDollars(
  years: number,
  seasons: number,
  months: number,
  week: number
): number {
  if (years - getLivedYears() >= 0) {
    return (
      ((years - getLivedYears()) * 365 +
        seasons * 90 +
        months * 30 +
        week * 7) *
      5
    );
  } else return 0;
}

export function countBooks(
  years: number,
  seasons: number,
  months: number
): number {
  if (years - getLivedYears() >= 0) {
    return (years - getLivedYears()) * 12 + seasons * 3 + months;
  } else return 0;
}

export function countPagesOfYourBook(
  years: number,
  seasons: number,
  months: number,
  week: number
): number {
  if (years - getLivedYears() >= 0) {
    return (
      (years - getLivedYears()) * 365 + seasons * 90 + months * 30 + week * 7
    );
  } else return 0;
}
