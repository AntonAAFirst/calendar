import Cookies from "js-cookie";

export function getBirthData(data: string): string {
  const year = Cookies.get(data);

  if (year === undefined) {
    return "nothing";
  } else {
    return year;
  }
}

const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const currentYear = new Date().getFullYear();

export function getLivedYears() {
  const yearOfBirth: string = getBirthData("year");
  const monthOfBirth: string = getBirthData("month");
  const dayOfBirth: string = getBirthData("day");

  let thisYear = 0;

  if (currentMonth + 1 < parseInt(monthOfBirth)) {
    thisYear = -1;
  } else if (
    currentMonth + 1 === parseInt(monthOfBirth) &&
    currentDay <= parseInt(dayOfBirth)
  ) {
    thisYear = -1;
  }
  return currentYear - parseInt(yearOfBirth) + thisYear;
}
