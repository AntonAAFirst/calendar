import Cookies from "js-cookie";
import "../shared/styles/overview/overview.css";
import OverviewInfoBlock from "../widgets/Overview/OverviewInfoBlock";
import OverviewYearsBlock from "../widgets/Overview/OverviewYearsBlock";
import StartPage from "./StartPage";

export interface Year {
  number: number;
  seasons: number[][][];
}

export default function Overview() {
  if (!Cookies.get("year")) {
    return <StartPage />;
  }
  return (
    <div className="overview-container">
      <OverviewYearsBlock />
      <OverviewInfoBlock />
    </div>
  );
}
