import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import ThisYear from "./pages/ThisYear";
import Overview from "./pages/OverView";
import Clock from "./pages/Clock";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="thisyear" element={<ThisYear />} />
        <Route path="overview" element={<Overview />} />
        <Route path="clock" element={<Clock />} />
      </Route>
    </Routes>
  );
}
