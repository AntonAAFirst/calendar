import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import {
  newFirstActive,
  newSecondActive,
  newThirdActive,
} from "../../shared/store/controlPanelReducer";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";

export default function ControlPanel() {
  const firstActive = useAppSelector(
    (state) => state.controlPanel.firstActivePanel
  );
  const secondActive = useAppSelector(
    (state) => state.controlPanel.secondActivePanel
  );
  const thirdActive = useAppSelector(
    (state) => state.controlPanel.thirdActivePanel
  );

  const dispatch = useAppDispatch();

  const controlPanelClassString = firstActive
    ? "clock-active"
    : secondActive
    ? "overview-active"
    : thirdActive
    ? "thisyear-active"
    : "";

  function deleteCookies() {
    Cookies.remove("year");
    Cookies.remove("month");
    Cookies.remove("day");
  }

  return (
    <div className={`contol-panel ${controlPanelClassString}`}>
      <div className="control-panel-container">
        <Link
          onClick={() => {
            dispatch(newFirstActive(true));
            dispatch(newSecondActive(false));
            dispatch(newThirdActive(false));
          }}
          to="clock"
          className={
            firstActive
              ? "control-panel__item-active-clock"
              : "control-panel__item"
          }
        >
          <i className="fi fi-sr-calendar "></i>
        </Link>
        <Link
          to="overview"
          onClick={() => {
            dispatch(newFirstActive(false));
            dispatch(newSecondActive(true));
            dispatch(newThirdActive(false));
          }}
          className={
            secondActive ? "control-panel__item-active" : "control-panel__item"
          }
        >
          <i className="fi fi-sr-hourglass"></i>
        </Link>
        <Link
          onClick={() => {
            dispatch(newFirstActive(false));
            dispatch(newSecondActive(false));
            dispatch(newThirdActive(true));
          }}
          to="thisyear"
          className={
            thirdActive ? "control-panel__item-active" : "control-panel__item"
          }
        >
          <i className="fi fi-sr-clock "></i>
        </Link>
        <Link onClick={deleteCookies} to="../">
          <i className="fi fi-bs-sign-out-alt"></i>
        </Link>
      </div>
    </div>
  );
}
