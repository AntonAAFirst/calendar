import LivedTime from "./LivedTime";

import { useEffect, useState, useRef } from "react";
import "../../../shared/styles/clock/infoblock.css";
import { getActivity } from "../../../shared/http/activityApi";
import { textUnderAgeStatic } from "../../../shared/static";

export default function ClockInfoBlock() {
  const [activityText, setActivityText] = useState<string>("sd");

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setActivityText(textUnderAgeStatic[getRandomInt(65)]);
  }, []);

  return (
    <div className="clock-info-block">
      <LivedTime />
      <div className="clock-info-block__text">{activityText}</div>
    </div>
  );
}
