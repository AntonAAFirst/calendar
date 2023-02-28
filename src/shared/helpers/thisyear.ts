export interface MonthArray {
  name: string;
  countDays: number[];
}

export const months: MonthArray[] = [
  { name: "Jan", countDays: createArrayByCount(31) },
  { name: "Feb", countDays: createArrayByCount(28) },
  { name: "Mar", countDays: createArrayByCount(31) },
  { name: "Apr", countDays: createArrayByCount(30) },
  { name: "May", countDays: createArrayByCount(31) },
  { name: "Jun", countDays: createArrayByCount(30) },
  { name: "Jul", countDays: createArrayByCount(31) },
  { name: "Aug", countDays: createArrayByCount(31) },
  { name: "Sep", countDays: createArrayByCount(30) },
  { name: "Oct", countDays: createArrayByCount(31) },
  { name: "Nov", countDays: createArrayByCount(30) },
  { name: "Dec", countDays: createArrayByCount(31) },
];

export function createArrayByCount(count: number) {
  let newArray = [];
  for (let i = 1; i <= count; i++) {
    newArray.push(i);
  }

  return newArray;
}

export function checkPastDay(selectedMonth: string, selectedDay: number) {
  const date = new Date();

  const currentMonthIndex = date.getUTCMonth();
  const currentDay = date.getDate();

  for (let i = 0; i < months.length; i++) {
    if (months[i].name === selectedMonth) {
      if (i > currentMonthIndex) {
        return true;
      } else if (i === currentMonthIndex && selectedDay >= currentDay) {
        return true;
      }
    }
  }

  return false;
}
