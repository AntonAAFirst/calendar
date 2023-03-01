import Cookies from "js-cookie";

export function getBirthData(data: string): string {
  const year = Cookies.get(data);

  if (year === undefined) {
    return "nothing";
  } else {
    return year;
  }
}

export const yearOfBirth: string = getBirthData("year");
export const monthOfBirth: string = getBirthData("month");
export const dayOfBirth: string = getBirthData("day");

export function getLivedYears() {
  let thisYear = 0;

  if (new Date().getMonth() + 1 < parseInt(monthOfBirth)) {
    thisYear = -1;
  } else if (
    new Date().getMonth() + 1 === parseInt(monthOfBirth) &&
    new Date().getDate() <= parseInt(dayOfBirth)
  ) {
    thisYear = -1;
  }
  return new Date().getFullYear() - parseInt(yearOfBirth) + thisYear;
}
