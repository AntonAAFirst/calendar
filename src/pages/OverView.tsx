import "../shared/styles/overview/overview.css";
import OverviewInfoBlock from "../widgets/Overview/OverviewInfoBlock";
import OverviewYearsBlock from "../widgets/Overview/OverviewYearsBlock";

export interface Year {
  number: number;
  seasons: number[][][];
}

export default function Overview() {
  return (
    <div className="overview-container">
      <OverviewYearsBlock />
      <OverviewInfoBlock />
    </div>
  );
}
