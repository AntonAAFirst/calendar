import { useState, useEffect } from "react";

type DaysLineProps = {
  todayIndex: number;
  monthIndex: number;
  countOfDays: number;
};

export default function DaysLine({
  todayIndex,
  monthIndex,
  countOfDays,
}: DaysLineProps) {
  const [line, setLine] = useState<any[] | null>(null);
  const [normalLine, setNormalLine] = useState<any[] | null>(null);

  function createDaysLineString(start: number, end: number): any[] {
    let startArray = [];

    for (let i = start; i <= end; i++) {
      startArray.push(i);
      startArray.push(" ");
    }

    return startArray;
  }

  useEffect(() => {
    if (monthIndex === new Date().getMonth()) {
      setLine(createDaysLineString(1, todayIndex - 1));
      setNormalLine(createDaysLineString(todayIndex, countOfDays));
    } else if (monthIndex < new Date().getMonth()) {
      setLine(createDaysLineString(1, countOfDays));
      setNormalLine(null);
    } else {
      setLine(null);
      setNormalLine(createDaysLineString(1, countOfDays));
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapper__item">
        {line ? <s className="mmm">{line}</s> : null}
        {normalLine}
      </div>
    </div>
  );
}
