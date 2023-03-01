import { useState, useEffect } from "react";
import { months } from "../shared/helpers/thisyear";

import "../shared/styles/clock/clock.css";
import BackgroundColor from "../widgets/Clock/BackgroundColor";
import ClockInfoBlock from "../widgets/Clock/infoblock/ClockInfoBlock";

export default function Clock() {
  const currentYear = new Date().getUTCFullYear();
  const [currentMonth, setCurrentMonth] = useState<number>(1);

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

  const daysBlockString = `${new Date().getDate()} / ${
    months[new Date().getUTCMonth()].countDays.length
  }`;

  useEffect(() => {
    setTimeout(() => {
      setSeconds(new Date().getSeconds());

      const myString = `${getSpaces(seconds)} 2018 2019 2020 2021 2022 2023`;
      setSecondsString(myString);
    }, 1000);
  });

  function getSpaces(countSpaces: number): string {
    let spaces = "";
    for (let i = 0; i < countSpaces; i++) {
      spaces += ".";
    }

    return spaces;
  }

  const [seconds, setSeconds] = useState<number>(new Date().getSeconds());

  const [secondString, setSecondsString] = useState<string>("");

  return (
    <div className="clock-container">
      <BackgroundColor />
      <div className="clock-content">
        <ClockInfoBlock />

        <div style={{ fontSize: "44px" }}>{secondString}</div>

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
