import React from "react";
import { Outlet } from "react-router";
import "../shared/styles/layout.css";
import ControlPanel from "../widgets/ControlPanel/ControlPanel";
import { useEffect } from "react";
import { getTriviaInfo } from "../shared/http/numbersApi";
import { textUnderAgeStatic } from "../shared/static";

export default function Layout() {
  async function setTriviaFacts() {
    for (let i = 0; i < 70; i++) {
      getTriviaInfo(i).then(({ data }) => {
        textUnderAgeStatic.push(data);
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
