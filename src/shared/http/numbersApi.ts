import axios from "axios";

const defaultNumberApiRequest = axios.create({
  baseURL: "http://numbersapi.com/",
});

export function getYearInfo(year: number) {
  return defaultNumberApiRequest.get(`${year}/year`);
}

export function getDateInfo(month: number, day: number) {
  return defaultNumberApiRequest.get(`/${month}/${day}/date`);
}

export function getTriviaInfo(number: number) {
  return defaultNumberApiRequest.get(`${number}/trivia`);
}
