import axios from "axios";

export function getInsult() {
  return axios.get(
    "http://evilinsult.com/generate_insult.php?lang=en&type=json"
  );
}
