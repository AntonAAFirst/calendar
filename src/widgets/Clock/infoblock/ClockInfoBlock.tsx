import LivedTime from "./LivedTime";

import { useEffect, useState } from "react";
import "../../../shared/styles/clock/infoblock.css";
import { getInsult, InsultObject } from "../../../shared/http/insultApi";
import axios from "axios";

export default function ClockInfoBlock() {
  const [insultText, setInsultText] = useState<string>("");

  async function getInsultData() {
    const response = await axios.get(
      "http://evilinsult.com/generate_insult.php?lang=en&type=json"
    );

    console.log(response);
  }

  useEffect(() => {
    getInsultData();
  }, []);

  return (
    <div className="clock-info-block">
      <LivedTime />
      <div>{insultText}</div>
    </div>
  );
}
