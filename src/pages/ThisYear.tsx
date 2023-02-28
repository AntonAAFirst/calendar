import "../shared/styles/thisyear.css";
import "../shared/styles/statistic.css";
import Months from "../widgets/ThisYear/Months";
import Statistic from "../widgets/ThisYear/Statistic";

export default function ThisYear() {
  return (
    <div className="thisyear-container">
      <Months />
      <Statistic />
    </div>
  );
}
