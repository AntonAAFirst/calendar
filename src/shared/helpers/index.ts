import Cookies from "js-cookie";

export function getBirthData(data: string): string {
  const year = Cookies.get(data);

  if (year === undefined) {
    return "nothing";
  } else {
    return year;
  }
}

const yearOfBirth: string = getBirthData("year");
const monthOfBirth: string = getBirthData("month");
const dayOfBirth: string = getBirthData("day");

export function getLivedYears() {
  let thisYear = 0;

  if (new Date().getUTCMonth() + 1 < parseInt(monthOfBirth)) {
    thisYear = -1;
  } else if (
    new Date().getUTCMonth() + 1 === parseInt(monthOfBirth) &&
    new Date().getDate() <= parseInt(dayOfBirth)
  ) {
    thisYear = -1;
  }
  return new Date().getFullYear() - parseInt(yearOfBirth) + thisYear;
}

// export function getLivedYearsByTime()
