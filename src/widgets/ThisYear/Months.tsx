import { months } from "../../shared/helpers/thisyear";
import DaysLine from "./DaysLine";

export default function Months() {
  return (
    <div className="months">
      {months.map((month) => (
        <div className="month">
          <div className="month-name">{month.name}</div>
          <DaysLine
            todayIndex={new Date().getDate()}
            monthIndex={months.indexOf(month)}
            countOfDays={month.countDays.length}
          />
        </div>
      ))}
    </div>
  );
}
