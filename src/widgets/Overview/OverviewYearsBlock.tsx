import {
  createYear,
  decadeRows,
} from "../../shared/helpers/overview/overviewYearsBlock";
import OneYear from "../../shared/UI/Overview/OneYear";

export default function OverviewYearsBlock() {
  return (
    <div className="years-block">
      {decadeRows.map((decade) => (
        <div className="decade-block">
          <div className="decade-block-age">{decade.age}</div>
          <div className="decade">
            {decade.numbers.map((year) => (
              <OneYear year={createYear(year)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
