import axios from "axios";

export interface InsultObject {
  number: string;
  language: string;
  insult: string;
  created: string;
  shown: string;
  createdby: string;
  active: string;
  comment: string;
}

export function getInsult() {
  return defaultInsultRequest.get<InsultObject>("/insult");
}

export const defaultInsultRequest = axios.create({
  baseURL: "http://evilinsult.com/generate_insult.php?lang=en&type=json",
});
