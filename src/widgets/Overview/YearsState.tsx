import { getBirthData, getLivedYears } from "../../shared/helpers";
import { getCurrentAgeText } from "../../shared/helpers/overview/overviewStatisticBlock";
import { getTriviaInfo } from "../../shared/http/numbersApi";
import { useAppSelector } from "../../shared/store/hooks";
import { useEffect } from "react";
import InfoBlock from "../../shared/UI/Overview/InfoBlock";
import { useState } from "react";
import { textUnderAgeStatic } from "../../shared/static";

export default function YearsState() {
  const currentAge = useAppSelector((state) => state.overview.currentAge);

  const currentYear = currentAge + parseInt(getBirthData("year"));
  const yearsDifference = currentAge - getLivedYears();

  return (
    <div className="years-state">
      <InfoBlock
        header={currentYear.toString()}
        text={getCurrentAgeText(yearsDifference)}
      />
      <InfoBlock
        header={currentAge.toString() + " years old"}
        text={textUnderAgeStatic[currentAge]}
      />
    </div>
  );
}