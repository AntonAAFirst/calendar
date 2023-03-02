import React from "react";
import { Outlet } from "react-router";
import "../shared/styles/layout.css";
import ControlPanel from "../widgets/ControlPanel/ControlPanel";
import { useEffect } from "react";
import { textUnderAgeStatic } from "../shared/static";
import { getActivity } from "../shared/http/activityApi";

export default function Layout() {
  async function setTriviaFacts() {
    for (let i = 0; i < 70; i++) {
      await getActivity().then((data) => {
        textUnderAgeStatic.push(data.data.activity);
      });
    }
  }

  useEffect(() => {
    setTriviaFacts();
  }, []);

  return (
    <div className="layout">
      <ControlPanel />
      <Outlet />
    </div>
  );
}
