import "../../styles/overview/yearsblock.css";
import { Year } from "../../../pages/OverView";
import { isPastDays } from "../../helpers/overview/overviewYearsBlock";
import { useAppDispatch } from "../../store/hooks";
import {
  newAllDolars,
  newBooksRead,
  newCurrentAge,
  newPagesOfYourBook,
} from "../../store/overviewReducer";
import {
  countBooks,
  countDollars,
  countPagesOfYourBook,
} from "../../helpers/overview/oneYearLogic";

interface LocalProps {
  year: Year;
}

export default function OneYear({ year }: LocalProps) {
  const dispatch = useAppDispatch();

  function dispatchAllData(
    years: number,
    seasons: number,
    months: number,
    week: number
  ) {
    dispatch(newAllDolars(countDollars(years, seasons, months, week)));
    dispatch(newBooksRead(countBooks(years, seasons, months)));
    dispatch(
      newPagesOfYourBook(countPagesOfYourBook(years, seasons, months, week))
    );
    dispatch(newCurrentAge(year.number));
  }

  return (
    <div className="one-year">
      {year.seasons.map((season: number[][]) => (
        <div className="one-year__season">
          {season.map((month) => (
            <div className="one-year__month">
              {month.map((week) => (
                <i
                  onMouseEnter={() =>
                    dispatchAllData(
                      year.number,
                      year.seasons.indexOf(season),
                      season.indexOf(month),
                      week
                    )
                  }
                  className={
                    isPastDays(
                      year.seasons.indexOf(season) * 3 +
                        season.indexOf(month) +
                        1,
                      week,
                      year.number
                    )
                      ? "fi fi-ss-bullet isPastDays one-year__week"
                      : "fi fi-ss-bullet one-year__week"
                  }
                ></i>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
