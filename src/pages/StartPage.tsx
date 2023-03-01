import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../shared/styles/authform.css";
import AuthFormItem from "../widgets/Auth/AuthFormItem";

export default function StartPage() {
  const [inputDay, setInputDay] = useState<string>("");
  const [inputMonth, setInputMonth] = useState<string>("");
  const [inputYear, setInputYear] = useState<string>("");

  function setCookies() {
    Cookies.set("day", inputDay);
    Cookies.set("month", inputMonth);
    Cookies.set("year", inputYear);
  }

  return (
    <div className="startpage-container">
      <div className="auth-form">
        <AuthFormItem
          text="День рождения"
          value={inputDay}
          setValue={setInputDay}
        />

        <AuthFormItem
          text="Месяц рождения"
          value={inputMonth}
          setValue={setInputMonth}
        />

        <AuthFormItem
          text="Год рождения"
          value={inputYear}
          setValue={setInputYear}
        />

        <Link to="clock" onClick={setCookies} className="auth-form__button">
          Продолжить
        </Link>
      </div>
    </div>
  );
}
