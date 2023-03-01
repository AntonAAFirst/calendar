import LivedTime from "./LivedTime";

import { useEffect, useState } from "react";
import "../../../shared/styles/clock/infoblock.css";
import { getInsult, InsultObject } from "../../../shared/http/insultApi";
import axios from "axios";

export default function ClockInfoBlock() {
  const [insultText, setInsultText] = useState<string>("");

  return (
    <div className="clock-info-block">
      <LivedTime />
      <div>{insultText}</div>
    </div>
  );
}
