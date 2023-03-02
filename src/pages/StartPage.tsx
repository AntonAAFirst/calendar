import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthFormItem from "../widgets/Auth/AuthFormItem";
import "../shared/styles/authform.css";
import { createArrayByCount } from "../shared/helpers/thisyear";
import Cookies from "js-cookie";
import { useAppDispatch } from "../shared/store/hooks";
import { newFirstActive } from "../shared/store/controlPanelReducer";

export default function StartPage() {
  const [inputDay, setInputDay] = useState<string>("1");
  const [inputMonth, setInputMonth] = useState<string>("1");
  const [inputYear, setInputYear] = useState<string>("1960");

  const dispatch = useAppDispatch();

  const days = createArrayByCount(31);
  const month = createArrayByCount(12);
  function setCookies() {
    Cookies.set("year", inputYear);
    Cookies.set("month", inputMonth);
    Cookies.set("day", inputDay);
    dispatch(newFirstActive(true));
  }

  function createYears() {
    let years = [];

    for (let i = 1960; i < 2023; i++) {
      years.push(i);
    }

    return years;
  }

  useEffect(() => {}, []);

  return (
    <div className="startpage-container">
      <div className="auth-form">
        <AuthFormItem
          text="День рождения"
          value={inputDay}
          setValue={setInputDay}
          arrayOptions={days}
        />

        <AuthFormItem
          text="Месяц рождения"
          value={inputMonth}
          setValue={setInputMonth}
          arrayOptions={month}
        />

        <AuthFormItem
          text="Год рождения"
          value={inputYear}
          setValue={setInputYear}
          arrayOptions={createYears()}
        />

        <Link to="clock" onClick={setCookies} className="auth-form__button">
          Продолжить
        </Link>
      </div>
    </div>
  );
}
