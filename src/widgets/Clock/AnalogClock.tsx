import { useRef, useEffect, useState } from "react";

import "../../shared/styles/clock/analogclock.css";

export default function AnalogClock() {
  const secondHand: any = useRef();
  const minsHand: any = useRef();
  const hourHand: any = useRef();

  const [rerenderState, setRerenderState] = useState<number>(1);

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minsHand.current.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();

    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

    hourHand.current.style.transform = `rotate(${hourDegrees}deg)`;
    setRerenderState((prev) => prev + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setDate();
    }, 1000);
  });

  return (
    <div className="analog-clock">
      <div className="outer-clock-face">
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>

        <div className="inner-clock-face">
          <div ref={hourHand} className="hand hour-hand"></div>
          <div ref={minsHand} className="hand min-hand"></div>
          <div ref={secondHand} className="hand second-hand"></div>
        </div>
      </div>
    </div>
  );
}
