import axios from "axios";
import { RefObject, useEffect, useRef, useState } from "react";
import { months } from "../shared/helpers/thisyear";
import { getInsult } from "../shared/http/insultApi";

import "../shared/styles/clock/clock.css";
import AnalogClock from "../widgets/Clock/AnalogClock";

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

  const [insultText, setInsultText] = useState<string>("base");

  // async function getFunc() {

  // }

  useEffect(() => {
    // getFunc();

    fetch("http://evilinsult.com/generate_insult.php?lang=en&type=json", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "secret",
      },
    }).then((response) => console.log(response));
    // getInsult().then((response) => console.log(response));
  }, []);

  return (
    <div className="clock-container">
      <div className="color-part">
        <div className="black-part"></div>
        <div className="white-part"></div>
      </div>

      <div className="clock-content">
        <div className="clock-info-block">
          <div className="time-lived">here will be time which you lived</div>
          <div> {insultText}</div>
        </div>

        <div className="clock-days-block">
          <div className="days-block">{daysBlockString}</div>
          <div className="clock-block">
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
