import { months } from "../../shared/helpers/thisyear";
import DaysLine from "./DaysLine";

export default function Months() {
  return (
    <div className="months">
      {months.map((item) => (
        <div className="month">
          <div className="month-name">{item.name}</div>
          <DaysLine days={item.countDays} monthName={item.name} />
        </div>
      ))}
    </div>
  );
}
