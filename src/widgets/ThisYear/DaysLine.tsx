import { checkPastDay } from "../../shared/helpers/thisyear";

type DaysLineProps = {
  days: number[];
  monthName: string;
};

export default function DaysLine({ days, monthName }: DaysLineProps) {
  return (
    <div className="month-days">
      {days.map((day) => (
        <div
          className={
            !checkPastDay(monthName, day)
              ? "month-days-day past-day"
              : "month-days-day"
          }
        >
          {day}
        </div>
      ))}
    </div>
  );
}
