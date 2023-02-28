import { useEffect, useState } from "react";
import {
  getDaysPercentOfYear,
  getPastDaysSinceTime,
  getPastMonthSinceYearStart,
  getPastWeeksSinceTime,
} from "../../shared/helpers/statistic";
import { months } from "../../shared/helpers/thisyear";
import { getDateInfo, getYearInfo } from "../../shared/http/numbersApi";

export default function Statistic() {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  const pastMonthsYearStart = getPastMonthSinceYearStart();

  const pastWeeksYearStart = getPastWeeksSinceTime(currentMonth, currentDay);

  const pastDaysSinceYearStart = getPastDaysSinceTime(0, 0);

  const daysPercentOfYear = getDaysPercentOfYear(getPastDaysSinceTime(0, 0));

  const pastDaysSinceMonth = getPastDaysSinceTime(currentMonth - 1, 0);

  const pastDaysSinceMonthInProcent =
    (pastDaysSinceMonth / 31).toString().slice(2, 4) +
    "." +
    (pastDaysSinceMonth / 31).toString().slice(4, 6);

  const nameCurrentMonth = months[currentMonth - 1].name;

  const [yearText, setYearText] = useState<string>("");
  const [currentDateText, setCurrentDateText] = useState<string>("");

  async function getDate() {
    await getYearInfo(2023).then(({ data }) => {
      setYearText(data);
    });
    await getDateInfo(currentMonth, currentDay).then(({ data }) => {
      setCurrentDateText(data);
    });
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div className="statistic-container">
      <div className="statistic">
        <div className="block-statistic">
          <div className="block-statistic__header">2023 Год</div>
          <p>прошло {pastMonthsYearStart} months</p>
          <p>прошло {pastWeeksYearStart} weeks</p>
          <p>прошло {pastDaysSinceYearStart} days</p>
          <p>прошло {daysPercentOfYear} % от 2023 year</p>
        </div>

        <div className="block-statistic">
          <div className="block-statistic__header">{nameCurrentMonth}</div>
          <p>{currentMonth} месяц по счету</p>
          <p>прошло {pastDaysSinceMonth} days</p>
          <p>прошло {pastDaysSinceMonthInProcent} % от текущего month</p>
        </div>
      </div>

      <div className="block-info">
        <p>{yearText}</p>
        <p>{currentDateText}</p>
      </div>
    </div>
  );
}
