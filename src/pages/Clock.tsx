import { useState, useEffect } from "react";
import { months } from "../shared/helpers/thisyear";
import { newFirstActive } from "../shared/store/controlPanelReducer";
import { useAppDispatch } from "../shared/store/hooks";

import "../shared/styles/clock/clock.css";
import AnalogClock from "../widgets/Clock/AnalogClock";
import BackgroundColor from "../widgets/Clock/BackgroundColor";
import ClockInfoBlock from "../widgets/Clock/infoblock/ClockInfoBlock";

export default function Clock() {
  const currentYear = new Date().getUTCFullYear();

  const dispatch = useAppDispatch();
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );

  const years = [
    currentYear - 3,
    currentYear - 2,
    currentYear - 1,
    currentYear,
    currentYear + 1,
    currentYear + 2,
    currentYear + 3,
    currentYear + 4,
  ];

  function setCorrectMonths(monthIndex: number) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (monthIndex > 5) {
      const firstPart = monthNames.slice(monthIndex - 5, monthNames.length);

      const secondPart = monthNames.slice(0, monthIndex - 5);

      return firstPart.concat(secondPart);
    }

    if (monthIndex < 5) {
      const secondPart = monthNames.slice(
        0,
        monthNames.length - 5 + monthIndex
      );

      const firstPart = monthNames.slice(
        monthNames.length - 5 + monthIndex,
        monthNames.length
      );

      return firstPart.concat(secondPart);
    }

    return monthNames;
  }

  useEffect(() => {
    dispatch(newFirstActive(true));
  }, []);

  const currentDay: string =
    new Date().getDate() < 9
      ? "0" + new Date().getDate().toString()
      : new Date().getDate().toString();

  return (
    <div className="clock-container">
      <BackgroundColor />
      <div className="clock-content">
        <ClockInfoBlock />

        <div className="clock-days-block">
          <div className="days">
            {currentDay}/{months[currentMonth].countDays.length}
          </div>
          <div className="clock-days-analog">
            <AnalogClock />
          </div>
        </div>

        <div className="clock-lines">
          <div className="months-line">
            {setCorrectMonths(currentMonth).map((month) => (
              <div className="months-line__item">{month}</div>
            ))}
          </div>

          <div className="years-line">
            {years.map((year) => (
              <div className="years-line__item">{year}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
