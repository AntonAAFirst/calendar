import "../shared/styles/thisyear.css";
import "../shared/styles/statistic.css";
import Months from "../widgets/ThisYear/Months";
import ThisYearStatistic from "../widgets/ThisYear/ThisYearStatistic";
import Cookies from "js-cookie";
import StartPage from "./StartPage";

export default function ThisYear() {
  if (!Cookies.get("year")) {
    return <StartPage />;
  }
  return (
    <div className="thisyear-container">
      <Months />
      <ThisYearStatistic />
    </div>
  );
}
