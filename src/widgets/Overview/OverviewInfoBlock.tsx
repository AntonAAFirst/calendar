import "../../shared/styles/overview/infoyears.css";
import DaysState from "./DaysState";
import YearsState from "./YearsState";

export default function OverviewInfoBlock() {
  return (
    <div className="infoyears-block">
      <YearsState />
      <DaysState />
    </div>
  );
}
