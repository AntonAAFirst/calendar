import { useEffect, useState } from "react";
import { getBirthData, getLivedYears } from "../../../shared/helpers";

export default function LivedTime() {
  const [livedYears, setLivedYears] = useState<number>(getLivedYears());
  const monthOfBirth: string = getBirthData("month");

  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );

  const [livedMonth, setLivedMonth] = useState<number>(
    currentMonth < parseInt(monthOfBirth)
      ? 12 - parseInt(monthOfBirth) + currentMonth
      : currentMonth - parseInt(monthOfBirth)
  );

  const [livedDays, setLivedDays] = useState<number>(new Date().getDate());

  const [livedHours, setLivedHours] = useState<number>(new Date().getHours());
  const [livedMinutes, setLivedMinutes] = useState<number>(
    new Date().getMinutes()
  );
  const [livedSecond, setLivedSecond] = useState<number>(
    new Date().getSeconds()
  );

  useEffect(() => {
    setTimeout(() => {
      setLivedYears(getLivedYears());
      setCurrentMonth(new Date().getMonth() + 1);
      setLivedMonth(
        currentMonth < parseInt(monthOfBirth)
          ? 12 - parseInt(monthOfBirth) + currentMonth
          : currentMonth - parseInt(monthOfBirth)
      );
      setLivedDays(new Date().getDate());
      setLivedHours(new Date().getHours());
      setLivedMinutes(new Date().getMinutes());
      setLivedSecond(new Date().getSeconds());
    }, 1000);
  });

  const livedTimeString: string = `${livedYears} years, ${livedMonth} months, ${livedDays} days,
  
  ${livedHours} hours,  ${livedMinutes} minutes, and ${livedSecond} seconds old`;

  return (
    <div className="lived-time">
      <div className="lived-time-container">
        <div className="lived-time__header">You are already</div>
        <div className="lived-time__age-string">{livedTimeString}</div>
      </div>
    </div>
  );
}
