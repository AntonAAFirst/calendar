import "../shared/styles/thisyear.css";
import "../shared/styles/statistic.css";
import Months from "../widgets/ThisYear/Months";
import ThisYearStatistic from "../widgets/ThisYear/ThisYearStatistic";

export default function ThisYear() {
  return (
    <div className="thisyear-container">
      <Months />
      <ThisYearStatistic />
    </div>
  );
}
