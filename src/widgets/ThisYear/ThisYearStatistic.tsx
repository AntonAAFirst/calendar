// import pic from "../../shared/img/name.png";

import { useEffect, useState } from "react";
import { textUnderAgeStatic } from "../../shared/static";

export default function ThisYearStatistic() {
  const currentYear = new Date().getFullYear();
  const pastDays: string = (
    (new Date().getTime() - new Date(currentYear, 0, 1).getTime()) /
    (86400 * 1000)
  )
    .toString()
    .slice(0, 2);

  const pastMonth = parseInt(pastDays) / 30;
  const pastTimeInPercent =
    (parseInt(pastDays) / 365).toString().slice(2, 4) +
    "." +
    (parseInt(pastDays) / 365).toString().slice(4, 5);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const [randomText, setRandomText] = useState<string>("");

  useEffect(() => {
    setRandomText(textUnderAgeStatic[getRandomInt(65)]);
  }, []);

  function clickIcon() {
    setRandomText(textUnderAgeStatic[getRandomInt(65)]);
  }

  return (
    <div className="thisyearstatistic-container">
      <div className="thisyear-name">{currentYear}</div>
      <div className="thisyear-statistic">
        <div className="thisyear-statistic__item">
          от начала года прошло {pastDays} days
        </div>
        <div className="thisyear-statistic__item">
          от начала года прошло {pastMonth} months
        </div>
        <div className="thisyear-statistic__item">
          от начала года прошло {pastTimeInPercent} percent
        </div>
        <div className="thisyear-statistic__facts">
          <div className="thisyear-statistic__fact__text">{randomText}</div>
          <i
            onClick={clickIcon}
            className="fi fi-ss-arrow-right arrow-icon"
          ></i>
        </div>
      </div>
    </div>
  );
}
