import axios from "axios";

export function getInsult() {
  return axios.get(
    "http://evilinsult.com/generate_insult.php?lang=en&type=json"
    // {
    //   method: "GET",
    //   withCredentials: true,
    //   //   mode: "no-cors",
    // }
  );
}
